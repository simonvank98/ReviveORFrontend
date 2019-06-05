import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {ORUserModel} from '../user/or-user.model';
import {APIService} from '../api/api.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    token: string;
    userInfo: any;
    userInfoChanged: EventEmitter<any> = new EventEmitter();
    showLogoutMessage = false;
    permissionLevel = 0;


    constructor(private api: APIService) {
        console.log(this.userInfo);
        if (this.loggedIn) {
            this.token = localStorage.getItem('access_token');
            this.loadUserData();
        }
    }

    register(userData: ORUserModel) {
        return this.api.post(`register`, userData);
    }

    login(email: string, password: string) {
        const loginData = {'email' : email, 'password' : password};
        return this.api.post(`auth/login`, loginData).pipe(tap(response => {
            localStorage.setItem('access_token', response['accessToken']);
            this.token = response['accessToken'];
            this.loadUserData();
        }));
    }

    renew() {
        return this.api.post(`auth/refresh`, null).pipe(tap(response => {
            localStorage.setItem('access_token', response['accessToken']);
            this.token = response['accessToken'];
            this.loadUserData();
        }, error => {
            this.logout();
        }));
    }

    logout() {
        this.userInfo = null;
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

    loadUserData() {
        this.permissionLevel = Number(localStorage.getItem('permissionLevel'));
        this.api.post(`auth/me`, null).subscribe(data => {
            this.userInfo = data;
            this.userInfoChanged.emit();
            this.permissionLevel = data['roles'][0]['permissionLevel'];
            localStorage.setItem('permissionLevel', String(this.permissionLevel));
        });
    }
}
