import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ThemePalette } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: UntypedFormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-accident',
  templateUrl: './accident.component.html',
  styleUrls: ['./accident.component.scss'],
})
export class FicheAccidentComponent {
  // Form
  labelForm: UntypedFormGroup;
  fileUploadForm: UntypedFormGroup;
  hideRequiredControl = new UntypedFormControl(false);
  floatLabelControl = new UntypedFormControl('auto');
  // checkbox
  selectedOption: string = '';
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  // Date Picker
  startDate = new Date(1990, 0, 1);
  date = new UntypedFormControl(new Date());
  serializedDate = new UntypedFormControl(new Date().toISOString());
  minDate: Date;
  maxDate: Date;

  selected = new UntypedFormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);
  matcher = new MyErrorStateMatcher();
  // Slide toggle
  color: ThemePalette = 'accent';

  constructor(fb: UntypedFormBuilder) {
    // Set the minimum to January 1st 5 years in the past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 5, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
    this.labelForm = fb.group({
      hideRequired: this.hideRequiredControl,
    });
    this.fileUploadForm = fb.group({
      uploadFile: [''],
    });
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  // Example method to log selected option
  logSelectedOption() {
    if (this.selectedOption === 'oui') {
      console.log('Oui is selected');
    } else if (this.selectedOption === 'non') {
      console.log('Non is selected');
    }
  }
}
