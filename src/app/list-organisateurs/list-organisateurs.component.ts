import {Component} from '@angular/core';
import {Organisateur} from "../interface/organisateur";
import {OrganisateurServiceService} from "../organisateur-service.service";

@Component({
  selector: 'app-list-organisateurs',
  templateUrl: './list-organisateurs.component.html',
  styleUrls: ['./list-organisateurs.component.scss']
})
export class ListOrganisateursComponent {
  organisateursInterface: Partial<Organisateur>[] = [];

  constructor(private orgaServ: OrganisateurServiceService) {
    //participantsServ.GetAllParticipant().subscribe((Response: Partial<EventInterface>[]) => this.participantsInterface = Response)
    orgaServ.GetAllOrganisateurs().subscribe((Response: Partial<Organisateur>[]) => this.organisateursInterface = Response)
  }


  onDelete(id: number | undefined) {
    if (id) {
      this.orgaServ.DeleteOrganisateur(id).subscribe(result => this.orgaServ.GetAllOrganisateurs().subscribe((Response: Partial<Organisateur>[]) => this.organisateursInterface = Response));
    }
  }
}
