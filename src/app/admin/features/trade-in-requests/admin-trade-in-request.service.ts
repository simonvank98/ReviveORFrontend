import {Injectable} from '@angular/core';
import {TradeInRequestModel} from './models/trade-in-request.model';
import {TempApiService} from '../../../shared/services/api/temp-api.service';

@Injectable({
    providedIn: 'root'
})
export class AdminTradeInRequestService {

    constructor(private api: TempApiService) {
    }

    public getAll() {
        return this.api.get<TradeInRequestModel[]>('tradeinrequests');
    }

    public get(id) {
        return this.api.get<TradeInRequestModel>(`tradeinrequests/${id}`);
    }
}
