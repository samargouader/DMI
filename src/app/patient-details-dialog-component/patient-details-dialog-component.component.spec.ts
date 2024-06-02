import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsDialogComponentComponent } from './patient-details-dialog-component.component';

describe('PatientDetailsDialogComponentComponent', () => {
  let component: PatientDetailsDialogComponentComponent;
  let fixture: ComponentFixture<PatientDetailsDialogComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientDetailsDialogComponentComponent]
    });
    fixture = TestBed.createComponent(PatientDetailsDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
