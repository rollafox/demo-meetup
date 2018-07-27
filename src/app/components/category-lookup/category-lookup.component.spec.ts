import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryService } from '../../services/category/category.service';
import { CategoryLookupComponent } from './category-lookup.component';
import { Category } from '../../models/category.model';
import { of } from 'rxjs';

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
