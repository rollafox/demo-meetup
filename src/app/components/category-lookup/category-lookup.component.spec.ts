import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '../../../../node_modules/@angular/material/input';
import { BrowserAnimationsModule } from '../../../../node_modules/@angular/platform-browser/animations';
import { CategoryService } from '../../services/category/category.service';
import { CategoryLookupComponent } from './category-lookup.component';

describe('CategoryLookupComponent', () => {
    let component: CategoryLookupComponent;
    let fixture: ComponentFixture<CategoryLookupComponent>;

    beforeEach(async(() => {
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
                CategoryService
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CategoryLookupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', inject([HttpTestingController], () => {
        expect(component).toBeTruthy();
    }));
});
