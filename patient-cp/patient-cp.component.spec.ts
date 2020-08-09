import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCpComponent } from './patient-cp.component';

describe('PatientCpComponent', () => {
  let component: PatientCpComponent;
  let fixture: ComponentFixture<PatientCpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientCpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
