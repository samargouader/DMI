import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsRoutingModule } from './forms-routing.module';
import { FormExamplesComponent } from './form-examples/form-examples.component';
import { FormValidationsComponent } from './form-validations/form-validations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

// Fiche à Remplir
import { FicheConsultationComponent } from './fiche-consultation/fiche-consultation.component';
import { CptRenduComponent } from './cpt-rendu/cpt-rendu.component';
import { FicheAccidentComponent } from './accident/accident.component';

// Les demandes d'examen
import { AnalyseBioComponent } from "./BIO/analyse-bio.component";
import { DmdEchoComponent } from "./dmd-ECHO/dmd-echo.component";
import { DmdTDMComponent } from "./dmd-TDM/dmd-tdm.component";
import { ECGComponent } from "./ECG/ECG.component";
import { ORLComponent } from "./ORL/ORL.component";
import { RadioComponent } from "./radio/radio.component";

import {
  OwlDateTimeModule,
  OwlNativeDateTimeModule,
} from '@danielmoncada/angular-datetime-picker';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [
    FormExamplesComponent,
    FormValidationsComponent,

    // Fiche à Remplir
    FicheConsultationComponent,
    CptRenduComponent,
    FicheAccidentComponent,
    // Les demandes d'examen
    AnalyseBioComponent,
    DmdEchoComponent,
    DmdTDMComponent,
    ECGComponent,
    ORLComponent,
    RadioComponent,

  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgxMaskDirective,
    NgxMaskPipe,
    ComponentsModule,
    SharedModule,
  ],
  providers: [provideNgxMask()],
})
export class FormModule {}
