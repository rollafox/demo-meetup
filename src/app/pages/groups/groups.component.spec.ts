import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { ReactiveFormsModule } from '../../../../node_modules/@angular/forms';
import { MatAutocompleteModule } from '../../../../node_modules/@angular/material/autocomplete';
import { MatCardModule } from '../../../../node_modules/@angular/material/card';
import { MatFormFieldModule } from '../../../../node_modules/@angular/material/form-field';
import { CategoryLookupComponent } from '../../components/category-lookup/category-lookup.component';
import { GroupCardComponent } from '../../components/group-card/group-card.component';
import { HtmlSanitizerPipe } from '../../pipes/html-sanitizer/html-sanitizer.pipe';
import { CategoryService } from '../../services/category/category.service';
import { SettingsService } from '../../services/settings/settings.service';
import { GroupsComponent } from './groups.component';

describe('GroupsComponent', () => {
    let component: GroupsComponent;
    let fixture: ComponentFixture<GroupsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GroupsComponent,
                CategoryLookupComponent,
                GroupCardComponent,
                HtmlSanitizerPipe
            ],
            imports: [
                HttpClientTestingModule,
                ReactiveFormsModule,
                MatCardModule,
                MatAutocompleteModule,
                MatFormFieldModule
            ],
            providers: [
                CategoryService,
                SettingsService
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GroupsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', inject([HttpClient, CategoryService, SettingsService], (categoryService: CategoryService,
        settingsService: SettingsService) => {
        expect(component).toBeTruthy();
    }));
});
