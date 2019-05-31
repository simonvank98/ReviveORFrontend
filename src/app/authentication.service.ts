import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {environment} from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    token: string;
    userinfo;
    userInfoChanged: EventEmitter<any> = new EventEmitter();

    constructor(public httpClient: HttpClient) {
    }

    login(email: string, password: string) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'multipart/form-data;',
            })
        };
        const logindata = {'email' : email, 'password' : password};
        return this.httpClient.post(`${environment.reviveORAPIUrl}auth\\login`, logindata).pipe(tap(res => {
            localStorage.setItem('access_token', res['accessToken']);
            this.token = res['accessToken'];
            console.log(this.token);
            this.httpClient.post(`${environment.reviveORAPIUrl}auth\\me`, null).subscribe(data => {
                this.userinfo = data;
                this.userInfoChanged.emit();
                console.log(this.userinfo);
            });
        }));
    }

    logout() {
        localStorage.removeItem('access_token');
    }

    public get loggedIn(): boolean {
        return localStorage.getItem('access_token') !== null;
    }
}
