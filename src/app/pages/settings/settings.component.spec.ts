import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { CategoryLookupComponent } from '../../components/category-lookup/category-lookup.component';
import { Category } from '../../models/category.model';
import { Storage } from '../../services/cache/cache.service';
import { CategoryService } from '../../services/category/category.service';
import { SettingsService } from '../../services/settings/settings.service';
import { SettingsComponent } from './settings.component';

describe('SettingsComponent', () => {
    let component: SettingsComponent,
        fixture: ComponentFixture<SettingsComponent>,
        testSettings: Storage<Category>,
        testCategory: Array<Category>;

    beforeEach(async(() => {
        testCategory = [{
            'id': 1,
            'name': 'Arts & Culture',
            'shortname': 'Arts'
        }];
        testSettings = {
            'mu-category': {
                'category': {
                    'id': 1,
                    'name': 'Arts & Culture',
                    'shortname': 'Arts'
                }
            }
        };
        const categoryService = jasmine.createSpyObj('CategoryService', ['getCategories']),
            getCategoriesSpy = categoryService.getCategories.and.returnValue(of(testCategory)),
            settingsService = jasmine.createSpyObj('SettingsService', ['getPreference']),
            getPreferenceSpy = settingsService.getPreference.and.returnValue(of(testSettings));
        TestBed.configureTestingModule({
            declarations: [SettingsComponent,
                CategoryLookupComponent],
            imports: [
                ReactiveFormsModule,
                BrowserAnimationsModule,
                MatAutocompleteModule,
                MatInputModule,
                MatFormFieldModule
            ],
            providers: [
                { provide: CategoryService, useValue: categoryService },
                { provide: SettingsService, useValue: settingsService }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
