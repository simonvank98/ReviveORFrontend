import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {environment} from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    token: string;

    constructor(public httpClient: HttpClient) {
    }

    login(email: string, password: string) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'multipart/form-data;',
            })
        };
        const logindata = {'email' : email, 'password' : password};
        console.log(logindata);

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);


        const params = new HttpParams();
        params.append('email', email);
        params.append('password', password);
        return this.httpClient.post<{ access_token: string }>(`${environment.reviveORAPIUrl}auth\\login`, logindata).pipe(tap(res => {
            localStorage.setItem('access_token', res.access_token);
            this.token = res.access_token;
        }));
    }

    logout() {
        localStorage.removeItem('access_token');
    }

    public get loggedIn(): boolean {
        return localStorage.getItem('access_token') !== null;
    }
}
