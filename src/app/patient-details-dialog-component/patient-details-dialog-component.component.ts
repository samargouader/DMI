import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-patient-details-dialog',
  template: `
    <div class="scrollable-dialog">
      <ng-container *ngIf="data">
        <div *ngFor="let patient of data">
          <mat-card class="patient-card">
            <mat-card-header>
              <mat-card-title>{{ patient.nom }} {{ patient.prenom }}</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <div class="patient-info">
                <div>
                  <p><strong>Age:</strong> {{ patient.age }}</p>
                  <p><strong>Adresse:</strong> {{ patient.adresse }}</p>
                  <p><strong>Téléphone:</strong> {{ patient.tel }}</p>
                  <p><strong>Médecin traitant:</strong> {{ patient.medecinTraitant }}</p>
                  <p><strong>Service d'origine:</strong> {{ patient.serviceOrigine }}</p>
                  <p><strong>Hôpital d'origine:</strong> {{ patient.hopitalOrigine }}</p>
                  <p><strong>Nombre de séances prescrites:</strong> {{ patient.nombreSeancesPrescrites }}</p>
                  <p><strong>Date d'examen:</strong> {{ patient.dateExamen | date: 'dd/MM/yyyy' }}</p>
                  <p><strong>Diagnostic:</strong> {{ patient.diagnostic }}</p>
                  <p><strong>Tabac:</strong> {{ patient.tabac ? 'Oui' : 'Non' }}</p>
                  <p><strong>Allergie:</strong> {{ patient.allergie ? 'Oui' : 'Non' }}</p>
                  <p><strong>Antécédents médicaux:</strong> {{ patient.antecedentsMedicaux }}</p>
                  <p><strong>Antécédents chirurgicaux:</strong> {{ patient.antecedentsChirurgicaux }}</p>
                  <p><strong>Traitement en cours:</strong> {{ patient.traitementEnCours }}</p>
                  <p><strong>Histoire de la maladie:</strong> {{ patient.histoireMaladie }}</p>
                  <p><strong>Examen clinique:</strong> {{ patient.examenClinique }}</p>
                  <p><strong>Radiographie thorax:</strong> {{ patient.radiographieThorax }}</p>
                  <p><strong>ECG:</strong> {{ patient.ecg }}</p>
                  <p><strong>Autres:</strong> {{ patient.autres }}</p>
                  <p><strong>Nombre de séances souhaitables:</strong> {{ patient.nbreSeancesSouhaitables }}</p>
                  <p><strong>Date souhaitée:</strong> {{ patient.dateSouhaitee | date: 'dd/MM/yyyy' }}</p>
                  <p><strong>Protocole:</strong> {{ patient.protocole }}</p>
                </div>
              </div>
              <!-- Add more fields as needed -->
            </mat-card-content>
          </mat-card>
        </div>
      </ng-container>
      <div *ngIf="!data" class="no-data-message">
        Pas de Données
      </div>
    </div>
  `,
  styles: [`
    .scrollable-dialog {
      max-height: 600px;
      overflow-y: auto;
      padding: 16px;
    }
    .patient-card {
      margin-bottom: 20px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .patient-card mat-card-header {
      background-color: #1976d2;
      color: #fff;
    }
    .patient-card p {
      margin: 8px 0;
    }
    .no-data-message {
      text-align: center;
      padding: 2rem;
    }
  `]
})
export class PatientDetailsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
