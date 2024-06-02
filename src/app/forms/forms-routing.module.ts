import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormExamplesComponent } from "./form-examples/form-examples.component";
import { FormValidationsComponent } from "./form-validations/form-validations.component";
// Fiche à Remplir
import { FicheAccidentComponent } from "./accident/accident.component";
import { FicheConsultationComponent } from "./fiche-consultation/fiche-consultation.component";
import { CptRenduComponent } from "./cpt-rendu/cpt-rendu.component";
// Les demandes d'examen biologique
import { AnalyseBioComponent } from "./BIO/analyse-bio.component";
import { DmdEchoComponent } from "./dmd-ECHO/dmd-echo.component";
import { DmdTDMComponent } from "./dmd-TDM/dmd-tdm.component";
import { ECGComponent } from "./ECG/ECG.component";
import { ORLComponent } from "./ORL/ORL.component";
import { RadioComponent } from "./radio/radio.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "fiche-consultation",
    pathMatch: "full",
  },
  {
    path: "form-example",
    component: FormExamplesComponent,
  },
  {
    path: "form-validation",
    component: FormValidationsComponent,
  },
  // Fiche à Remplir
  {
    path: "fiche-consultation",
    component: FicheConsultationComponent,
  },
  {
    path: "cpt-rendu",
    component: CptRenduComponent,
  },
  {
    path: "accident",
    component: FicheAccidentComponent,
  },
  // Les demandes d'examen
  {
    path: "analyse-bio",
    component: AnalyseBioComponent,
  },
  {
    path: "dmd-echo",
    component: DmdEchoComponent,
  },
  {
    path: "dmd-TDM",
    component: DmdTDMComponent,
  },
  {
    path: "ECG",
    component: ECGComponent,
  },
  {
    path: "ORL",
    component: ORLComponent,
  },
  {
    path: "radio",
    component: RadioComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule {}
