import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PatientsComponent } from './patients.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('PatientsComponent', () => {
  let component: PatientsComponent;
  let fixture: ComponentFixture<PatientsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PatientsComponent],
      imports: [
        MatTableModule,
        MatCheckboxModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatIconModule,
        NoopAnimationsModule
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a dataSource with initial data', () => {
    expect(component.dataSource.data.length).toBeGreaterThan(0);
  });

  it('should select all rows when master toggle is called', () => {
    component.masterToggle();
    expect(component.selection.selected.length).toBe(component.dataSource.data.length);
  });

  it('should clear all selections when master toggle is called again', () => {
    component.masterToggle();
    component.masterToggle();
    expect(component.selection.selected.length).toBe(0);
  });

  it('should remove selected rows', () => {
    component.selection.select(component.dataSource.data[0]);
    component.removeSelectedRows();
    expect(component.dataSource.data.length).toBe(1);
  });
});
