import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {EMPTY, Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';

@Injectable()
export class UserDataResolver implements Resolve<any> {
    constructor(private authService: AuthenticationService) {}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
    ): Observable<any>|Promise<any> {
        if (this.authService.loggedIn && this.authService.userInfo === undefined) {
            return this.authService.loadUserData();
        } else {
            return EMPTY;
        }
    }


}
