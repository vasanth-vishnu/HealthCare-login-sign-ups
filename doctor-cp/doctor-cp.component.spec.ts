import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorCpComponent } from './doctor-cp.component';

describe('DoctorCpComponent', () => {
  let component: DoctorCpComponent;
  let fixture: ComponentFixture<DoctorCpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorCpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
