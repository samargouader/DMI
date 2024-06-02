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
  selector: 'app-fiche-consultation',
  templateUrl: './fiche-consultation.component.html',
  styleUrls: ['./fiche-consultation.component.scss'],
})
export class FicheConsultationComponent {
  // Form
  consultationForm: UntypedFormGroup;
  fileUploadForm: UntypedFormGroup;
  hideRequiredControl = new UntypedFormControl(false);
  floatLabelControl = new UntypedFormControl('auto');
  // checkbox
  checked = false;
  indeterminate = false;
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
    this.consultationForm = fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      age: ['', Validators.required],
      adresse: ['', Validators.required],
      tel: ['', Validators.required],
      medecinTraitant: ['', Validators.required],
      serviceOrigine: ['', Validators.required],
      hopitalOrigine: ['', Validators.required],
      nombreSeancesPrescrites: ['', Validators.required],
      dateExamen: ['', Validators.required],
      diagnostic: ['', Validators.required],
      tabac: [false],
      allergie: [false],
      antecedentsMedicaux: [''],
      antecedentsChirurgicaux: [''],
      traitementEnCours: [''],
      histoireMaladie: [''],
      examenClinique: [''],
      radiographieThorax: [''],
      ecg: [''],
      autres: [''],
      nbreSeancesSouhaitables: ['', Validators.required],
      dateSouhaitee: ['', Validators.required],
      protocole: ['', Validators.required],
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

  onSubmit() {
    if (this.consultationForm.valid && this.fileUploadForm.valid) {
      const formData = {
        ...this.consultationForm.value,
        ...this.fileUploadForm.value,
      };
      const userId = JSON.parse(localStorage.getItem('currentUser')!).id;
      let data: any[] = [];
      if (sessionStorage.getItem(userId)) {
        data = JSON.parse(sessionStorage.getItem(userId)!);
      }
      data.push(formData);
      sessionStorage.setItem(userId, JSON.stringify(data));
      this.consultationForm.reset()
      this.fileUploadForm.reset()
        } else {
      console.log('Form is invalid');
    }
  }
}
