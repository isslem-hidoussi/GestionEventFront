import {Component, OnInit} from '@angular/core';
import {JwtService} from "../jwt.service";
import {EventsServiceService} from "../events-service.service";
import {EventInterface} from "../interface/eventInterface";

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.scss']
})
export class MyEventsComponent implements OnInit {
  role: string;
  userId: string | null;
  eventList: Partial<EventInterface>[] = []

  constructor(private jwtServ: JwtService, private eventsServ: EventsServiceService) {
    this.role = jwtServ.getRole();
    this.userId = jwtServ.getUserId();
  }

  ngOnInit(): void {
    if (this.role === "participant" && this.userId) {
      this.eventsServ.getAllEventsOfParticipant(this.userId).subscribe((Response: EventInterface[]) => this.eventList = Response)
    } else if (this.role === "organisateur" && this.userId) {
      this.eventsServ.getAllEventsOfOrganisateur(this.userId).subscribe((Response: EventInterface[]) => this.eventList = Response)
    }
  }


}
