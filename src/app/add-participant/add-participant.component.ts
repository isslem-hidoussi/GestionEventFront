import { Component } from '@angular/core';
import { ParticipantServiceService } from '../participant-service.service';
import { Participant } from '../interface/participant';

@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.scss']
})
export class AddParticipantComponent  {
formData :Partial<Participant>={}
constructor(private participantService: ParticipantServiceService){

}
onSubmit():void{
  console.log(this.formData)
 // this.organisateurService.AddOrganisateur(this.formData).subscribe(response=>alert('ajout avec success'),error=>alert('echec'))
this.participantService.AddOPareticipant(this.formData).subscribe(response=>alert('ajout avec success'),error=>alert('echec'))
}

}
