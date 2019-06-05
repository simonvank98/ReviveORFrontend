import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthenticationService} from '../../shared/services/auth/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class PermissionGuard implements CanActivate {

    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const permissionLevel = route.data['permissionLevel'];
        if (this.authenticationService.permissionLevel < permissionLevel) {
            this.router.navigate(['/not-found']);
            return false;
        }
        return true;
    }
}
