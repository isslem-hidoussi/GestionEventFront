import {Component} from '@angular/core';
import {Participant} from "../interface/participant";
import {ParticipantServiceService} from "../participant-service.service";
import {EventInterface} from "../interface/eventInterface";

@Component({
  selector: 'app-list-participants',
  templateUrl: './list-participants.component.html',
  styleUrls: ['./list-participants.component.scss']
})
export class ListParticipantsComponent {
  participantsInterface: Partial<Participant>[] = [];

  constructor(private participantsServ: ParticipantServiceService) {
    participantsServ.GetAllParticipant().subscribe((Response: Partial<EventInterface>[]) => this.participantsInterface = Response)
  }

  onDelete(id: number | undefined) {
    console.log(id)

    if (id != undefined) {
      this.participantsServ.DeleteParticipant(id).subscribe(respnse => this.participantsServ.GetAllParticipant().subscribe((Response: Partial<EventInterface>[]) => this.participantsInterface = Response));

    }
  }
}
