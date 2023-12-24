import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getEtudiants(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/etudiants`);
  }

  getEtudiant(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/etudiants/${id}`);
  }

  addEtudiant(etudiant: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/etudiants`, etudiant);
  }

  updateEtudiant(id: number, etudiant: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/etudiants/${id}`, etudiant);
  }

  deleteEtudiant(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/etudiants/${id}`);
  }
}
