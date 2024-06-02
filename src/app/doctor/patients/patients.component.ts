import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PatientDetailsDialogComponent } from './../../patient-details-dialog-component/patient-details-dialog-component.component';

interface Patient {
  id: number;
  img: string;
  name: string;
  gender: string;
  address: string;
  mobile: string;
  date: Date;
  bGroup: string;
  treatment: string;
}

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent implements OnInit {
  displayedColumns: string[] = ['select', 'id', 'img', 'name', 'gender', 'address', 'mobile', 'date', 'bGroup', 'illness', 'actions'];
  dataSource = new MatTableDataSource<Patient>([]);
  selection = new SelectionModel<Patient>(true, []);
  exampleDatabase = {
    isTblLoading: false
  };

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadPatients();
  }

  loadPatients() {
    this.exampleDatabase.isTblLoading = true;
    this.getPatients().subscribe((data: Patient[]) => {
      this.dataSource.data = data;
      this.exampleDatabase.isTblLoading = false;
    });
  }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>('./assets/data/patient.json'); 
  }

  addNew() {
    console.log('Add new patient');
  }

  refresh() {
    this.loadPatients();
    console.log('Refresh data');
  }

  removeSelectedRows() {
    this.selection.selected.forEach((item) => {
      const index: number = this.dataSource.data.findIndex((d) => d === item);
      this.dataSource.data.splice(index, 1);
    });
    this.dataSource = new MatTableDataSource<Patient>(this.dataSource.data);
    this.selection.clear();
  }

  exportExcel() {
    console.log('Export to Excel');
  }

  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  editCall(row: Patient) {
    console.log('Edit patient', row);
  }

  deleteItem(row: Patient) {
    const index: number = this.dataSource.data.findIndex((d) => d === row);
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource<Patient>(this.dataSource.data);
    console.log('Deleted patient', row);
  }


  openPatientDetails(patientId: number) {
    const userId = patientId.toString().replace(/^0+/, '');
    console.log(userId);
    
    const patientData = JSON.parse(sessionStorage.getItem(userId)!); // Parse the JSON string
    console.log(patientData);
    const dialogRef = this.dialog.open(PatientDetailsDialogComponent, {
      width: '600px', // Adjust the width as needed
      data: patientData // Pass the patient data to the dialog
    });
  }
  
}
