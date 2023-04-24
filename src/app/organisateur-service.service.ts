import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Organisateur } from './interface/organisateur';

@Injectable({
  providedIn: 'root'
})
export class OrganisateurServiceService {
  constructor(private http:HttpClient) {
  }

  GetAllOrganisateurs():Observable<any>{
    return this.http.get('http://localhost:8081/Organisateurs/All');
  }

  GetOrganisateurById(id:number):Observable<any>{
    return this.http.get(`http://localhost:8081/Organisateurs/${id}`);
  }

  DeleteOrganisateur(id:number):Observable<any>{
    return this.http.delete(`http://localhost:8081/Organisateurs/${id}`);
  }
  AddOrganisateur(organisateur :Partial<Organisateur>):Observable<any>{
    return this.http.post('http://localhost:8081/Organisateurs/add-organisateur',organisateur);
  }

  updateOrganisateur(organisateur :Partial<Organisateur>):Observable<any>
  {
    return this.http.put('http://localhost:8081/Organisateur/',organisateur)
  }

}
