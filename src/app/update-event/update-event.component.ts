import { Component,OnInit ,Input} from '@angular/core';
import { EventInterface } from '../interface/eventInterface';
import { EventsServiceService } from '../events-service.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.scss']
})
export class UpdateEventComponent implements OnInit{
@Input() eventId :any;
  formData : Partial<EventInterface>={}
  constructor(private eventService: EventsServiceService){}
  ngOnInit(): void {
  
    this.eventService.getEventById(this.eventId).subscribe(response=>this.formData=response);
    console.log(this.eventId)

  }
  onSubmit():void{
    this.eventService.updateEvent(this.formData).subscribe(response=>alert('evenement modifié avec success!'),error=>alert("echec de modification"));
    console.log(this.formData)
    this.eventService.getEventById(this.eventId).subscribe(response=>this.formData=response);
   }

   


}