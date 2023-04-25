import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  LogIn(username: string, password: string): Observable<any> {
    const httpParams = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.post('http://localhost:8081/login', httpParams.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }

  GetId(email: string): Observable<any> {
    return this.http.get("http://localhost:8081/Personne/" + email);
  }
}
