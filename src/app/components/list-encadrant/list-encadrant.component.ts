import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {EncadrantService} from "../../services/encadrant.service";
import {EtudiantDialogComponent} from "../etudiant-dialog/etudiant-dialog.component";
import {EncadrantDialogComponent} from "../encadrant-dialog/encadrant-dialog.component";

@Component({
  selector: 'app-list-encadrant',
  standalone: true,
    imports: [
        MatButtonModule,
        MatIconModule,
        MatTableModule
    ],
  templateUrl: './list-encadrant.component.html',
  styleUrl: './list-encadrant.component.css'
})
export class ListEncadrantComponent implements  OnInit{

  encadrants!: any[];

  ngOnInit(): void {
    this.loadEncadrants();
  }

  constructor(
    private dialog: MatDialog,
    private encadrantService: EncadrantService
  ) {}

  loadEncadrants() {
    this.encadrantService.getEcadrants().subscribe(data => {
      this.encadrants = data;
    });
  }


  openAddDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    this.dialog.open(EncadrantDialogComponent, dialogConfig).afterClosed().subscribe(result => {
      // Rafraîchir la liste après la fermeture du dialogue, si nécessaire
      if (result) {
        this.loadEncadrants();
      }
    });
  }


  openUpdateDialog(id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = { id: id };

    this.dialog.open(EncadrantDialogComponent, dialogConfig).afterClosed().subscribe(result => {
      // Rafraîchir la liste après la fermeture du dialogue, si nécessaire
      if (result) {
        this.loadEncadrants();
      }
    });
  }


  deleteEncadrant(id: number) {
    this.encadrantService.deleteEncadrant(id).subscribe(() => {
      this.loadEncadrants();
    });
  }
}
