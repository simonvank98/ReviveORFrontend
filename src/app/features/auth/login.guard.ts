import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthenticationService} from '../../shared/services/auth/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {

    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const url = state.url;
        if (!this.authenticationService.loggedIn) {
            this.router.navigate(['/login'], {queryParams: {'redirectTo': url}});
            return false;
        }
        return true;
    }
}
