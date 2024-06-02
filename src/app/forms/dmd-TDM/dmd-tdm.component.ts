import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dmd-tdm',
  templateUrl: './dmd-tdm.component.html',
  styleUrls: ['./dmd-tdm.component.scss'],
})
export class DmdTDMComponent {
  register: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder) {
    this.register = this.fb.group({
      first: ['', [Validators.required]],
      last: ['', [Validators.required]],
      age: ['', [Validators.required]],
      disease: ['', [Validators.required]],
      doctorname: ['', [Validators.required]],
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