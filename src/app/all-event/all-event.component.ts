import {Component} from '@angular/core';
import {EventsServiceService} from '../events-service.service';
import {OnInit} from '@angular/core';
import {EventInterface} from '../interface/eventInterface';
import {JwtService} from "../jwt.service";
import {resolve} from "@angular/compiler-cli";

@Component({
  selector: 'app-all-event',
  templateUrl: './all-event.component.html',
  styleUrls: ['./all-event.component.scss']

})
export class AllEventComponent implements OnInit {

  title = 'Event-app';
  eventsInterface: Partial<EventInterface>[] = [];
  role: string;
  userId: string | null;

  constructor(private eventService: EventsServiceService, private jwtServ: JwtService) {
    this.role = this.jwtServ.getRole()
    this.userId = this.jwtServ.getUserId();
  }

  ngOnInit(): void {

    console.log('on init')
    this.eventService.getAllEvents().subscribe((Response: EventInterface[]) => this.eventsInterface = Response);
    console.log(this.eventsInterface);

  }

  onDelete(idEvent: any): void {
    let confirmation = confirm("Voulez-vous vraiment supprimer cet evenement ?")
    if (confirmation) {
      this.eventService.DeleteEventById(idEvent).subscribe(response => this.eventService.getAllEvents().subscribe((Response: EventInterface[]) => this.eventsInterface = Response));
      alert("evenement supprime avec success !")
    }


  }

  onAdd() {

  }


  onParticiper(idEvent: any) {
    this.eventService.AddparticipantToEvent(idEvent, this.userId).subscribe();
  }

  onOrganiser(idEvent: any) {
    this.eventService.AddOrganisateurToEvent(idEvent, this.userId).subscribe();
  }
}
