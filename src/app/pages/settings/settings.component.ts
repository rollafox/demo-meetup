import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category/category.service';

@Component({
    selector: 'dvt-mu-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    categories: Array<Category> = [];
    list$: Observable<Array<Category>>;
    categoryFilter: FormGroup;

    constructor(private categoryService: CategoryService,
        private formBuilder: FormBuilder) { }

    ngOnInit() {
    }

    displayFn(category?: Category): string | undefined {
        return category ? category.name : undefined;
    }

    cacheIt(categorySelected) {
        this.categoryService.selectPreference(categorySelected);
    }

}
