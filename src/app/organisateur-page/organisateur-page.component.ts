import {Component} from '@angular/core';
import {JwtService} from "../jwt.service";

@Component({
  selector: 'app-organisateur-page',
  templateUrl: './organisateur-page.component.html',
  styleUrls: ['./organisateur-page.component.scss']
})
export class OrganisateurPageComponent {
  constructor(private jwtServ: JwtService) {
  }
}
