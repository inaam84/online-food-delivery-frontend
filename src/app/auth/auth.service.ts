import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // apiUrl = 'https://dummyjson.com/auth/login';
  apiUrl = 'http://onlinefooddeliverybackend.test/api/login';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const payload = {email, password};

    return this.http.post(this.apiUrl, payload);
  }
}
