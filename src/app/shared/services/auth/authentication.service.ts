import {EventEmitter, Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {ORUserModel} from '../user/or-user.model';
import {APIService} from '../api/api.service';

@Injectable()
export class AuthenticationService {

    token: string;
    userInfo: any;
    userInfoChanged: EventEmitter<any> = new EventEmitter();
    showLogoutMessage = false;
    permissionLevel = 0;


    constructor(private api: APIService) {
        if (this.loggedIn) {
            this.token = localStorage.getItem('access_token');
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
            this.loadUserData().subscribe();
        }));
    }

    renew() {
        return this.api.post(`auth/refresh`, null).pipe(tap(response => {
            localStorage.setItem('access_token', response['accessToken']);
            this.token = response['accessToken'];
            this.loadUserData().subscribe();
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
        return this.api.post(`auth/me`, null).pipe(tap(data => {
            this.userInfo = data;
            this.permissionLevel = data['roles'][0]['permissionLevel'];
            localStorage.setItem('permissionLevel', String(this.permissionLevel));
            this.userInfoChanged.emit();
            console.log('user info changed');
        }));
    }
}
