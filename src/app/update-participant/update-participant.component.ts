import { Component, OnInit ,Input} from '@angular/core';
import { ParticipantServiceService } from '../participant-service.service';
import { Participant } from '../interface/participant';

@Component({
  selector: 'app-update-participant',
  templateUrl: './update-participant.component.html',
  styleUrls: ['./update-participant.component.scss']
})
export class UpdateParticipantComponent  implements OnInit{

  @Input() participantId :any;
  formData:Partial<Participant>={}
constructor(private participantService:ParticipantServiceService){}
  ngOnInit(): void { 
    this.participantService.GetParticipantById(this.participantId).subscribe(response=>this.formData=response);
    console.log(this.participantId)
  }
  onSubmit():void{
    console.log(this.formData)
   // this.organisateurService.AddOrganisateur(this.formData).subscribe(response=>alert('ajout avec success'),error=>alert('echec'))
  this.participantService.updateParticipant(this.formData).subscribe(response=>alert('ajout avec success'),error=>alert('echec'))
  }
  

}
