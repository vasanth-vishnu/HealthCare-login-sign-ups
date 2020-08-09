import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFpComponent } from './patient-fp.component';

describe('PatientFpComponent', () => {
  let component: PatientFpComponent;
  let fixture: ComponentFixture<PatientFpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientFpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientFpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
