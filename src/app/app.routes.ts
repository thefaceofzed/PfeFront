import { Routes } from '@angular/router';
import {ListEtudiantComponentComponent} from "./components/list-etudiant-component/list-etudiant-component.component";
import {ListEncadrantComponent} from "./components/list-encadrant/list-encadrant.component";

export const routes: Routes = [
  {path: 'etudiants', component: ListEtudiantComponentComponent},
  {path: 'etudiants/:id', component: ListEtudiantComponentComponent},
  {path: 'encadrants', component: ListEncadrantComponent},
];
