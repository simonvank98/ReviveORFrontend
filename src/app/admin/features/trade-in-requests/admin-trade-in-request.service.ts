import {Injectable} from '@angular/core';
import {TradeInRequestModel} from './models/trade-in-request.model';
import {APIService} from '../../../shared/services/api/api.service';

@Injectable({
    providedIn: 'root'
})
export class AdminTradeInRequestService {

    constructor(private api: APIService) {
    }

    public getAll() {
        return this.api.get<TradeInRequestModel[]>('tradeinrequests');
    }

    public get(id) {
        return this.api.get<TradeInRequestModel>(`tradeinrequests/${id}`);
    }

    public put(model: TradeInRequestModel) {
        return this.api.put<TradeInRequestModel>(`tradeinrequests/${model.id}`, model);
    }
}
