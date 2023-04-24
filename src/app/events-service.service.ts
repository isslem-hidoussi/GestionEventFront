import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventInterface } from './interface/eventInterface';


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
    return this.http.delete(`http://localhost:8081/Events/${id}/organisateur/${idOrganisateur}`)
   }
  

  AddEvent(event:Partial<EventInterface>):Observable<any>
  {
    return this.http.post("http://localhost:8081/Events/add-event",event)
  }
  updateEvent(event:Partial<EventInterface>):Observable<any>
  {
    return this.http.put("http://localhost:8081/Events/",event)
  }
  AddOrganisateurToEvent(event:Partial<EventInterface>,id:number,idOrganisateur:number):Observable<any>
{
  return this.http.put(`localhost:8081/Events/${id}/organisateur/${idOrganisateur}`,null);

}  

AddparticipantToEvent(id:number,idParticipant:number):Observable<any>
{
  return this.http.put(`localhost:8081/Events/${id}/participant/${idParticipant}`,null)
}

DeleteParticipantFromEvent(id:Number,idParticipant:Number):Observable<any>
{
  return this.http.delete(`http://localhost:8081/Events/${id}/participant/${idParticipant}`);
}

}
