import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent {
  register: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder) {
    this.register = this.fb.group({
      first: ['', [Validators.required]],
      last: ['', [Validators.required]],
      doctorname: ['', [Validators.required]],
      radio: [false],
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