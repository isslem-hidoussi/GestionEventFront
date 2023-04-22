import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsServiceService {

  constructor(private http:HttpClient) {

   }
   getAllEvents():Observable<any>{

    return this.http.get<any>('http://localhost:8081/Events/All');
   }
   getEventById(id:number):Observable<any>{
    return this.http.get<any>(`http://localhost:8081/Events/${id}`);
   }
  getAllOrganisateursOfEvent(id:number):Observable<any>
  {
    return this.http.get<any>(`http://localhost:8081/Events/${id}/organisateurs/All`);
   }
   GetAllParticipantsOfEvent(id:number):Observable<any>{
    return this.http.get<any>(`http://localhost:8081/Events/${id}/participants/All`)
   }

   DeleteEventById(id:number):Observable<any>
   {
    return this.http.delete<any>(`http://localhost:8081/Events/${id}`)
  
   }
   DeleteOrganisateurFromEventById(id:number,idOrganisateur:number):Observable<any>
   {
    return this.http.delete<any>(`http://localhost:8081/Events/${id}/organisateur/${idOrganisateur}`)
   }
   DeleteParticipantFromEvent(id:number,idParticipant:number):Observable<any>

  {
    return this.http.delete<any>(`http://localhost:8081/Events/${id}/participant/${id}`)
  }
 
   }
