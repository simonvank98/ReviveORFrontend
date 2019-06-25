import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree} from '@angular/router';
import {EMPTY, Observable, of} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {switchMap} from 'rxjs/operators';

@Injectable()
export class UserDataResolverGuard implements CanActivate {
    constructor(private authService: AuthenticationService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.authService.loggedIn && this.authService.userInfo === undefined) {
            return this.authService.loadUserData().pipe(switchMap(() => of(true)));
        } else {
            return true;
        }
    }


}
