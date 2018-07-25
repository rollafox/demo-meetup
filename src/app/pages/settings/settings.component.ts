import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category/category.service';
import { SettingsService } from '../../services/settings/settings.service';

@Component({
    selector: 'dvt-mu-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    categories: Array<Category> = [];

    constructor(private categoryService: CategoryService,
        private settingsService: SettingsService) { }

    ngOnInit() {
    }

    displayFn(category?: Category): string | undefined {
        return category ? category.name : undefined;
    }

    updatePreference(categorySelected) {
        this.settingsService.setPreference(categorySelected);
    }

}
