import {Component, Input, OnInit} from '@angular/core';
import {OrganisateurServiceService} from '../organisateur-service.service';
import {Organisateur} from '../interface/organisateur';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-organisateur',
  templateUrl: './update-organisateur.component.html',
  styleUrls: ['./update-organisateur.component.scss']
})
export class UpdateOrganisateurComponent implements OnInit {
  organisteurId: any;
  formData: Partial<Organisateur> = {}

  constructor(private organisateurService: OrganisateurServiceService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.organisteurId = this.route.snapshot.paramMap.get('id-organisateur');
    this.organisateurService.GetOrganisateurById(this.organisteurId).subscribe(response => this.formData = response);
    console.log(this.organisteurId)
  }

  onSubmit(): void {
    console.log(this.formData)
    // this.organisateurService.AddOrganisateur(this.formData).subscribe(response=>alert('ajout avec success'),error=>alert('echec'))
    this.organisateurService.updateOrganisateur(this.formData).subscribe(response => alert('modification avec success'), error => alert('echec'))
    this.organisateurService.GetOrganisateurById(this.organisteurId).subscribe(response => this.formData = response);
  }
}
