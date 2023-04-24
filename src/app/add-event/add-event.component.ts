import { Component } from '@angular/core';
import { EventsServiceService } from '../events-service.service';
import { EventInterface } from '../interface/eventInterface';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent {

  formData:Partial<EventInterface>={};
  constructor(private eventService:EventsServiceService){

  }
  onSubmit():void{
   this.eventService.AddEvent(this.formData).subscribe(response=>alert('evenement ajouté avec success!'),error=>alert("echec"));
   console.log(this.formData)
  }
}
