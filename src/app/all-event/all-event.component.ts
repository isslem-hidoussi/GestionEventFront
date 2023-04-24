import { Component } from '@angular/core';
import { EventsServiceService } from '../events-service.service';
import { OnInit } from '@angular/core';
import { EventInterface } from '../interface/eventInterface';
@Component({
  selector: 'app-all-event',
  templateUrl: './all-event.component.html',
  styleUrls: ['./all-event.component.scss']
  
})
export class AllEventComponent implements OnInit {
  
  title='Event-app';
  eventsInterface:Partial<EventInterface>[]=[];
 constructor(private eventService:EventsServiceService){
 }
ngOnInit(): void {
  
  console.log('on init')
  this.eventService.getAllEvents().subscribe((Response: EventInterface[])=>this.eventsInterface=Response);
  console.log(this.eventsInterface);
}
onDelete(idEvent:any):void{
  let confirmation =confirm("Voulez-vous vraiment supprimer cet evenement ?")
  if(confirmation){
  this.eventService.DeleteEventById(idEvent).subscribe(response=>  this.eventService.getAllEvents().subscribe((Response: EventInterface[])=>this.eventsInterface=Response));
  alert("evenement supprime avec success !")
}


}
}
