import {Component, Inject} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EtudiantService} from "../../services/etudiant.service";
import {EncadrantService} from "../../services/encadrant.service";

@Component({
  selector: 'app-encadrant-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './encadrant-dialog.component.html',
  styleUrl: './encadrant-dialog.component.css'
})
export class EncadrantDialogComponent {

  encadrant: any = {};

  constructor(
    public dialogRef: MatDialogRef<EncadrantDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private encadrantService: EncadrantService
  ) {
    // Si l'ID est fourni, chargez les détails
    if (data && data.id) {
      this.encadrantService.getEncadrant(data.id).subscribe(result => {
        this.encadrant = result;
      });
    }
  }


  saveEncadrant() {
    // Appel de la méthode d'ajout ou de mise à jour du service
    if (this.encadrant.id) {
      this.encadrantService.updateEncadrant(this.encadrant.id, this.encadrant).subscribe(() => {
        this.dialogRef.close(true); // Fermez le dialogue après la mise à jour
      });
    } else {
      this.encadrantService.addEncadrant(this.encadrant).subscribe(() => {
        this.dialogRef.close(true); // Fermez le dialogue après l'ajout
      });
    }
  }
  closeDialog() {
    this.dialogRef.close(false); // Fermez le dialogue sans effectuer d'opération
  }
}
