import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsDialogComponent } from './patient-details-dialog-component.component';

describe('PatientDetailsDialogComponentComponent', () => {
  let component: PatientDetailsDialogComponent;
  let fixture: ComponentFixture<PatientDetailsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientDetailsDialogComponent]
    });
    fixture = TestBed.createComponent(PatientDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
