import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EncadrantService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }


getEcadrants():Observable<any[]>{
  return this.http.get<any[]>(`${this.apiUrl}/encadrants`);
  }


  getEncadrant(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/encadrants/${id}`);
  }

  addEncadrant(encadrant: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/encadrants`, encadrant);
  }


  updateEncadrant(id: number, encadrant: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/encadrants/${id}`, encadrant);
  }

  deleteEncadrant(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/encadrants/${id}`);
  }


}
