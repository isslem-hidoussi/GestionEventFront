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
    return this.http.get<any>('localhost:8081/Events/All');
   }
   }
