import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://dummyjson.com/auth/login';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const payload = {username, password};

    return this.http.post(this.apiUrl, payload);
  }
}
