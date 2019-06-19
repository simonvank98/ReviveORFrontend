import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthenticationService} from '../../shared/services/auth/authentication.service';
import {TradeInProcessService} from './trade-in-process.service';

@Injectable({
    providedIn: 'root'
})
export class TradeInProcessStateGuard implements CanActivate {

    private mandatoryProcessStates = {
        '/trade-in/type': 0,
        '/trade-in/material': 1,
        '/trade-in/piece': 2,
        '/trade-in/indication': 3,
        '/trade-in/finalize': 4,
    };

    constructor(private router: Router, private tradeInProcessService: TradeInProcessService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const url = state.url;
        const tradeIn = this.tradeInProcessService;
        const cleanURL = this.findCleanURL(url);
        const requestedState = this.findRequestProcessState(cleanURL);

        if (!tradeIn.hasType()) {
            if (requestedState < 1) {
                return true;
            }
            this.router.navigate(['/trade-in/type']);
            return false;
        } else if (!tradeIn.hasMaterial()) {
            if (requestedState < 2) {
                return true;
            }
            this.router.navigate(['/trade-in/material']);
            return false;
        } else if (!tradeIn.hasPiece()) {
            if (requestedState < 3) {
                return true;
            }
            this.router.navigate(['/trade-in/piece']);
            return false;
        } else if (!tradeIn.hasEstimatedCredit()) {
            if (requestedState < 4) {
                return true;
            }
            this.router.navigate(['/trade-in/indication']);
            return false;
        } else if (!tradeIn.hasImages()) {
            if (requestedState < 5) {
                return true;
            }
            this.router.navigate(['/trade-in/finalize']);
            return false;
        }
        return true;
    }

    private findCleanURL(url: string): string {
        const processStateKeys = Object.keys(this.mandatoryProcessStates);
        for (const key of processStateKeys) {
            if (url.startsWith(key)) {
                return key;
            }
        }
        return null;
    }

    private findRequestProcessState(url: string): number {
        const state = this.mandatoryProcessStates[url];
        if (state === undefined) {
            return 99999;
        } else {
            return state;
        }
    }
}
