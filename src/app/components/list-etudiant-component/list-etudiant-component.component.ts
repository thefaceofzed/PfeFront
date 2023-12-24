import {Component, OnInit} from '@angular/core';
import {MatTableModule} from "@angular/material/table";

import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {EtudiantDialogComponent} from "../etudiant-dialog/etudiant-dialog.component";
import {MatIconModule} from "@angular/material/icon";

import {MatButtonModule} from "@angular/material/button";
import {EtudiantService} from "../../services/etudiant.service";


@Component({
  selector: 'app-list-etudiant-component',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './list-etudiant-component.component.html',
  styleUrl: './list-etudiant-component.component.css'
})
export class ListEtudiantComponentComponent implements  OnInit{

  etudiants!: any[];

  constructor(
    private etudiantService: EtudiantService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadEtudiants();
    console.log(this.etudiants);
  }

  loadEtudiants() {
    this.etudiantService.getEtudiants().subscribe(data => {
      this.etudiants = data;
    });
  }

  openAddDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    this.dialog.open(EtudiantDialogComponent, dialogConfig).afterClosed().subscribe(result => {
      // Rafraîchir la liste après la fermeture du dialogue, si nécessaire
      if (result) {
        this.loadEtudiants();
      }
    });
  }

  openUpdateDialog(id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = { id: id };

    this.dialog.open(EtudiantDialogComponent, dialogConfig).afterClosed().subscribe(result => {
      // Rafraîchir la liste après la fermeture du dialogue, si nécessaire
      if (result) {
        this.loadEtudiants();
      }
    });
  }

  deleteEtudiant(id: number) {
    this.etudiantService.deleteEtudiant(id).subscribe(() => {
      this.loadEtudiants();
    });
  }
}
