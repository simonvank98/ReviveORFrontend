import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {TradeInRequestModel} from '../models/trade-in-request.model';
import {TradeInRequestService} from '../trade-in-request.service';

@Injectable()
export class TradeInRequestResolver implements Resolve <TradeInRequestModel[]> {
  constructor(private tradeInRequestService: TradeInRequestService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.tradeInRequestService.get(route.params.id);
  }
}
