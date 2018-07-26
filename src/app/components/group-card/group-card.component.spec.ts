import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCardModule } from '@angular/material/card';
import { GroupCardComponent } from './group-card.component';

describe('GroupCardComponent', () => {
    let component: GroupCardComponent;
    let fixture: ComponentFixture<GroupCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GroupCardComponent],
            imports: [
                MatCardModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GroupCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
