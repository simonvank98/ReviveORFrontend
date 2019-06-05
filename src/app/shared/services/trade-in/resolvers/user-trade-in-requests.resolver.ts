import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {TradeInRequestModel} from '../models/trade-in-request.model';
import {TradeInRequestService} from '../trade-in-request.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class UserTradeInRequestsResolver implements  Resolve <TradeInRequestModel[]> {
    constructor(private tradeInRequestService: TradeInRequestService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any>|Promise<any>|any {
        return this.tradeInRequestService.getAllForSelf();
    }
}
