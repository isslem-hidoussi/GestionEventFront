import {Component, OnInit} from '@angular/core';
import {EventsServiceService} from '../events-service.service';
import {EventInterface} from '../interface/eventInterface';
import {LoginService} from "../login.service";
import {JwtService} from "../jwt.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data: any = {"username": "", "password": ""};

  constructor(private loginService: LoginService, private jwtServ: JwtService, private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.jwtServ.getRole())
    console.log(this.jwtServ.getToken())
  }

  onSubmit() {
    this.loginService.LogIn(this.data.username, this.data.password).subscribe(result => {
      this.jwtServ.setToken(result.access_token)
      this.router.navigateByUrl('http://localhost:4200')
      location.reload()
    });

  }
}
