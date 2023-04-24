import { Component } from '@angular/core';
import { Organisateur } from '../interface/organisateur';
import { OrganisateurServiceService } from '../organisateur-service.service';

@Component({
  selector: 'app-add-organisateur',
  templateUrl: './add-organisateur.component.html',
  styleUrls: ['./add-organisateur.component.scss']
})
export class AddOrganisateurComponent{
formData : Partial<Organisateur>={}
constructor(private organisateurService:OrganisateurServiceService){}
onSubmit():void{
  console.log(this.formData)
  this.organisateurService.AddOrganisateur(this.formData).subscribe(response=>alert('ajout avec success'),error=>alert('echec'))
//this.organisateurService.GetAllOrganisateurs().subscribe(response=>console.log(response))
}

}
