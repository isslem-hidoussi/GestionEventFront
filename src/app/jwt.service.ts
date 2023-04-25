import {Injectable} from '@angular/core';
import jwt_decode from "jwt-decode";
import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  jwtToken: string | undefined;
  decodedToken: { [key: string]: string; } | undefined;

  constructor(private loginServ: LoginService) {
  }

  setToken(token: string) {
    this.jwtToken = token;
    this.decodedToken = jwt_decode(token);
    // @ts-ignore
    let email = this.decodedToken["sub"];
    console.log(this.decodedToken);
    localStorage.setItem("access_token", token);
    // @ts-ignore
    localStorage.setItem("roles", this.decodedToken["roles"])
    if (email !== "admin") {
      this.loginServ.GetId(email).subscribe(result => localStorage.setItem("user-id", result))
    } else {
      localStorage.setItem("user-id", "admin")
    }
  }

  getRole(): string {
    return localStorage.getItem("roles") || "public";
  }

  getToken(): string | null {
    return localStorage.getItem("access_token")
  }

  getUserId(): string | null {
    return localStorage.getItem("user-id")
  }

  logOut(): void {
    localStorage.removeItem("access_token")
    localStorage.removeItem("roles")
    localStorage.removeItem("user-id")
  }
}
