import { Component, EventEmitter, OnInit, Output, Input, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs'; import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category/category.service';
import { startWith, map } from '../../../../node_modules/rxjs/operators';
import { MatAutocompleteSelectedEvent } from '../../../../node_modules/@angular/material/autocomplete';

@Component({
    selector: 'dvt-mu-category-lookup',
    templateUrl: './category-lookup.component.html',
    styleUrls: ['./category-lookup.component.css']
})
export class CategoryLookupComponent implements OnInit {
    categories: Array<Category> = [];
    filteredList$: Observable<Array<Category>>;
    selectedCategories: Array<Category> = [];
    categoryControl: FormGroup;
    separatorKeys: number[] = [ENTER, COMMA];
    @Input('placeholder') placeholder = 'Search';
    @Input('multiSelect') multiSelect = true;
    // tslint:disable-next-line:no-output-rename
    @Output('selected') selectedEmitter = new EventEmitter();
    @ViewChild('autoCompInput') autoCompInput: ElementRef;

    constructor(private categoryService: CategoryService,
        private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.categoryControl = this.formBuilder.group({
            'filterBy': ''
        });

        this.categoryService.getCategories().subscribe(
            (fetchedCategories) => {
                this.categories = fetchedCategories.slice();
            }
        );
        this.filteredList$ = this.categoryControl.get('filterBy').valueChanges.pipe(
            startWith(null),
            map((value: string | null) => {
                return value ? this._filter(value) : this.categories.slice();
            })
        );
    }

    displayFn(category?: Category): string | undefined {
        return category ? category.name : undefined;
    }

    remove(category: Category): void {
        const index = this.selectedCategories.indexOf(category);
        if (index >= 0) {
            this.selectedCategories.splice(index, 1);
        }
    }

    selected(event: MatAutocompleteSelectedEvent): void {
        if (!this.multiSelect) {
            this.selectedCategories.length = 0;
        }
        this.selectedCategories.push(event.option.value);
        this.selectedEmitter.emit(this.selectedCategories);
        this.autoCompInput.nativeElement.value = '';
        this.categoryControl.get('filterBy').setValue(null);
    }

    private _filter(value: Category | string): Category[] {
        if (value instanceof Category) {
            return this.categories.filter(cat => cat.id !== value.id);
        }
        const filterValue = value.toLowerCase();
        return this.categories.filter(cat => {
            return cat.name.toLowerCase().indexOf(filterValue) === 0 && !this.selectedCategories.includes(cat);
        });
    }

}
