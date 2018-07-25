import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '../../../../node_modules/@angular/forms';
import { MatAutocompleteModule } from '../../../../node_modules/@angular/material/autocomplete';
import { MatFormFieldModule } from '../../../../node_modules/@angular/material/form-field';
import { CategoryLookupComponent } from '../../components/category-lookup/category-lookup.component';
import { SettingsComponent } from './settings.component';

describe('SettingsComponent', () => {
    let component: SettingsComponent;
    let fixture: ComponentFixture<SettingsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SettingsComponent,
                CategoryLookupComponent],
            imports: [
                ReactiveFormsModule,
                MatAutocompleteModule,
                MatFormFieldModule
            ]
        })
            .compileComponents();
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
