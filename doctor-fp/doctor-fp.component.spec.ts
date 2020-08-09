import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorFpComponent } from './doctor-fp.component';

describe('DoctorFpComponent', () => {
  let component: DoctorFpComponent;
  let fixture: ComponentFixture<DoctorFpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorFpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorFpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
