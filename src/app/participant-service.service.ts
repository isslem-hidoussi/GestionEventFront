import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, PartialObserver } from 'rxjs';
import { Participant } from './interface/participant';


@Injectable({
  providedIn: 'root'
})
export class ParticipantServiceService {

  constructor(private http:HttpClient) {
  }
  GetAllParticipant():Observable<any>{
    return this.http.get('http://localhost:8081/participant/All')
  }
  GetParticipantById(id : number):Observable<any>{
    return this.http.get(`http://localhost:8081/participant/${id}`)
  }
  DeleteParticipant(id:number):Observable<any>{
    return this.http.delete(`http://localhost:8081/participant/${id}`)
  }
  AddOPareticipant(participant:Partial<Participant>):Observable<any>{
    return this.http.post('http://localhost:8081/participant/add-participant',participant)
  }

  updateParticipant(participant:Partial<Participant>):Observable<any>
  {
      return this.http.put('http://localhost:8081/participant/',participant)  

  }
  
}
