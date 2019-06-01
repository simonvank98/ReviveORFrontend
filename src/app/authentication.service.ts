import {EventEmitter, Injectable, OnInit} from '@angular/core';
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
    showLogoutMessage = false;

    constructor(public httpClient: HttpClient) {
        console.log(this.userinfo);
        if (this.loggedIn) {
            this.token = localStorage.getItem('access_token');
        }
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
            this.getUserData();
        }));
    }

    renew() {
        return this.httpClient.post(`${environment.reviveORAPIUrl}auth\\refresh`, null).pipe(tap(res => {
            localStorage.setItem('access_token', res['accessToken']);
            this.token = res['accessToken'];
            this.getUserData();
        }, error => {
            this.logout();
        }));
    }

    logout() {
        this.userinfo = null;
        this.userInfoChanged.emit();
        this.showLogoutMessage = true;
        localStorage.removeItem('access_token');
    }

    public get loggedIn(): boolean {
        return localStorage.getItem('access_token') !== null;
    }

    shouldShowLogoutMessage(): boolean {
        if (this.showLogoutMessage) {
            this.showLogoutMessage = false;
            return true;
        }
        return false;
    }

    getUserData() {
        this.httpClient.post(`${environment.reviveORAPIUrl}auth\\me`, null).subscribe(data => {
            this.userinfo = data;
            this.userInfoChanged.emit();
            console.log(this.userinfo);
        });
    }
}
