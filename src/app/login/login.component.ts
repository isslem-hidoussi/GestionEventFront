import { Component, OnInit } from '@angular/core';
import { EventsServiceService } from '../events-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data:any;
  constructor(private EventsService:EventsServiceService){}
ngOnInit(): void {
  console.log("hello");
  this.EventsService.getAllEvents().subscribe(response=>this.data=response)
  console.log(this.data);
}

}
