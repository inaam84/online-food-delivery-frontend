import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse, LoginPayload, RegisterPayload, User } from '../core/models/common.models';
import { ApiEndPoint, LocalStorage } from '../core/constants/constants';

@Injectable({
    providedIn: 'root',
})

export class AuthService {
    isLoggedIn = signal<boolean>(false);

    constructor(private _http: HttpClient) {
        if(this.getUserToken()) {
            this.isLoggedIn.update(() => true);
        }
    }

    login(payload: LoginPayload){
        return this._http
            .post<ApiResponse<User>>(
                ApiEndPoint.Auth.Login,
                payload
            )
            .pipe( 
                map((response) => {
                    if(response.token) {
                        this.isLoggedIn.update(() => true);
                        localStorage.setItem(LocalStorage.token, response.token);
                    }
                    return response;
                }) 
            );
    }

    register(payload: RegisterPayload): Observable<any> {
        return this._http.post<ApiResponse<User>>(
            ApiEndPoint.Auth.Register,
            payload
        );
    }

    getUserToken() {
        return localStorage.getItem(LocalStorage.token);
    }

    logout() {
        localStorage.removeItem(LocalStorage.token);
        this.isLoggedIn.update(() => false);
    }
}
