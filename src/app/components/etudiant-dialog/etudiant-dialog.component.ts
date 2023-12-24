import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";

import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {EtudiantService} from "../../services/etudiant.service";

@Component({
  selector: 'app-etudiant-dialog',
  standalone: true,
  imports: [
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogContent,
    MatDialogTitle,
    MatDialogActions
  ],
  templateUrl: './etudiant-dialog.component.html',
  styleUrl: './etudiant-dialog.component.css'
})
export class EtudiantDialogComponent {
  etudiant: any = {};

  constructor(
    public dialogRef: MatDialogRef<EtudiantDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private etudiantService: EtudiantService
  ) {
    // Si l'ID est fourni, chargez les détails de l'étudiant
    if (data && data.id) {
      this.etudiantService.getEtudiant(data.id).subscribe(result => {
        this.etudiant = result;
      });
    }
  }

  saveEtudiant() {
    // Appel de la méthode d'ajout ou de mise à jour du service
    if (this.etudiant.id) {
      this.etudiantService.updateEtudiant(this.etudiant.id, this.etudiant).subscribe(() => {
        this.dialogRef.close(true); // Fermez le dialogue après la mise à jour
      });
    } else {
      this.etudiantService.addEtudiant(this.etudiant).subscribe(() => {
        this.dialogRef.close(true); // Fermez le dialogue après l'ajout
      });
    }
  }

  closeDialog() {
    this.dialogRef.close(false); // Fermez le dialogue sans effectuer d'opération
  }
}
