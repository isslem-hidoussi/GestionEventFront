import {Component, OnInit, Input} from '@angular/core';
import {ParticipantServiceService} from '../participant-service.service';
import {Participant} from '../interface/participant';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-participant',
  templateUrl: './update-participant.component.html',
  styleUrls: ['./update-participant.component.scss']
})
export class UpdateParticipantComponent implements OnInit {

  participantId: any;
  formData: Partial<Participant> = {}

  constructor(private participantService: ParticipantServiceService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.participantId = this.route.snapshot.paramMap.get('id-participant');
    this.participantService.GetParticipantById(this.participantId).subscribe(response => this.formData = response);
    console.log(this.participantId)
  }

  onSubmit(): void {
    console.log(this.formData)
    this.participantService.updateParticipant(this.formData).subscribe(response => alert('modification avec success'), error => alert('echec'))
  }


}
