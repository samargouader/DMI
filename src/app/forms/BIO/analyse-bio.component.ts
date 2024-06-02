import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-analyse-bio',
  templateUrl: './analyse-bio.component.html',
  styleUrls: ['./analyse-bio.component.scss'],
})
export class AnalyseBioComponent {
  register: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder) {
    this.register = this.fb.group({
      first: ['', [Validators.required]],
      last: ['', [Validators.required]],
      doctorname: ['', [Validators.required]],
      nfs: [false],
      crp: [false],
      iono: [false],
      uree: [false],
      creatinine: [false],
      glycemie: [false],
      hymoglobineGlyquee: [false],
      autres: ['']
    });
  }

  onRegister() {
    if (this.register.valid) {
      console.log('Form Value', this.register.value);
      alert('Demande envoyée');
    } else {
      console.log('Form is not valid');
      this.register.markAllAsTouched();
    }
  }
}