import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category/category.service';
import { CategoryLookupComponent } from './category-lookup.component';

describe('CategoryLookupComponent', () => {
    let component: CategoryLookupComponent;
    let fixture: ComponentFixture<CategoryLookupComponent>;
    let testCategory: Array<Category>;

    beforeEach(async(() => {
        testCategory = [{
            'id': 1,
            'name': 'Arts & Culture',
            'shortname': 'Arts'
        }];
        const categoryService = jasmine.createSpyObj('CategoryService', ['getCategories']),
            getCategoriesSpy = categoryService.getCategories.and.returnValue(of(testCategory));

        TestBed.configureTestingModule({
            declarations: [CategoryLookupComponent],
            imports: [
                BrowserAnimationsModule,
                ReactiveFormsModule,
                MatAutocompleteModule,
                MatFormFieldModule,
                MatInputModule,
                MatChipsModule,
                HttpClientTestingModule
            ],
            providers: [
                { provide: CategoryService, useValue: categoryService }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(CategoryLookupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
