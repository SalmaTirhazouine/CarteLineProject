import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entreprise } from './entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  private baseURL ="http://localhost:2001/Entreprise";
  constructor(private httpClient :HttpClient) { }


  getEntreprisesList(): Observable<Entreprise[]>{
    return this.httpClient.get<Entreprise[]>(`${this.baseURL}/getall`);
  }

  createEntreprise(Entreprise: Entreprise): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/addEntreprise`, Entreprise);
  }

  getEntrepriseById(id: number): Observable<Entreprise>{
    return this.httpClient.get<Entreprise>(`${this.baseURL}/getEntreprise?id=${id}`);
  }

  updateEntreprise(id: number, Entreprise: Entreprise): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/updateEntreprise?id=${id}`, Entreprise);
  }

  deleteEntreprise(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/delete_Entreprise?id=${id}`);
}
 
}
