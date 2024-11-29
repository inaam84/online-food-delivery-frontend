import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ApiResponse, LoginPayload, RegisterPayload, User } from '../core/models/common.models';
import { ApiEndPoint, LocalStorage } from '../core/constants/constants';

@Injectable({
    providedIn: 'root',
})

export class AuthService {
    isLoggedIn = signal<boolean>(false);
    router = inject(Router);

    constructor(private _http: HttpClient) {}

    login(payload: LoginPayload){
        return this._http
            .post<ApiResponse<User>>(
                ApiEndPoint.Auth.Login,
                payload
            )
            .pipe( 
                map((response) => {
                    if(response.token) {
                        localStorage.setItem(LocalStorage.token, response.token);
                    }
                }) 
            );
    }

    register(payload: RegisterPayload): Observable<any> {
        return this._http.post<ApiResponse<User>>(
            ApiEndPoint.Auth.Register,
            payload
        );
    }

    logout() {
        this.router.navigate(['login']);
    }
}
