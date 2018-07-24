import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category/category.service';

@Component({
    selector: 'dvt-mu-category-lookup',
    templateUrl: './category-lookup.component.html',
    styleUrls: ['./category-lookup.component.css']
})
export class CategoryLookupComponent implements OnInit {
    categories: Array<Category> = [];
    list$: Observable<Array<Category>>;
    categoryFilter: FormGroup;
    @Output('selectedCategory') selectedCategory = new EventEmitter();

    constructor(private categoryService: CategoryService,
        private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.categoryFilter = this.formBuilder.group({
            'filterBy': ''
        });
        this.list$ = this.categoryService.getCategories();

        // TODO: Add in typeahead filter on Obs.
        this.categoryFilter.get('filterBy').valueChanges.subscribe(
            (change) => {
                console.log('On Change - ', change);
            }
        );
    }

    displayFn(category?: Category): string | undefined {
        return category ? category.name : undefined;
    }

    onInputChange() {
        this.selectedCategory.emit(this.categoryFilter.get('filterBy').value);
    }

}
