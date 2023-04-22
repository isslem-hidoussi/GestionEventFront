import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ParticipantServiceService {

  constructor(private http:HttpClient) {
  }
  GetParticipantById(id : number):Observable<any>{
    return this.http.get(`http://localhost:8081/participant/${id}`)
  }
  

}
