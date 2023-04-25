import {Component} from '@angular/core';
import {JwtService} from "../jwt.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  role: string;

  constructor(private jwtServ: JwtService, private router: Router) {
    this.role = jwtServ.getRole();
  }

  logout() {
    this.jwtServ.logOut();
    this.router.navigateByUrl('')
    location.reload();
  }
}
