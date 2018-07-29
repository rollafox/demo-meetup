import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferenceDisplayComponent } from './preference-display.component';

describe('PreferenceDisplayComponent', () => {
  let component: PreferenceDisplayComponent;
  let fixture: ComponentFixture<PreferenceDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferenceDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferenceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
