import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {TradeInRequestModel} from '../models/trade-in-request.model';
import {AdminTradeInRequestService} from '../admin-trade-in-request.service';

@Injectable()
export class AllTradeInRequestResolver implements Resolve <TradeInRequestModel[]> {
  constructor(private adminTradeInRequestService: AdminTradeInRequestService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.adminTradeInRequestService.getAll();
  }
}

