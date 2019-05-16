import {Injectable} from '@angular/core';
import {TradeInRequestModel} from './models/trade-in-request.model';
import {TempApiService} from '../../../shared/services/api/temp-api.service';

@Injectable({
    providedIn: 'root'
})
export class AdminTradeInRequestService {

    /*
                    { imageId: 2, url: 'https://theoceanrepublic.com/images/products/266/thumb/OR-8829.jpg' },
                { imageId: 3, url: 'https://theoceanrepublic.com/images/products/281/thumb/OR-6848.jpg' }
                imagePath: ['https://theoceanrepublic.com/images/products/281/thumb/OR-6848.jpg']
         
     */

    constructor(private api: TempApiService) {
    }

    public getAll() {
        return this.api.get<TradeInRequestModel[]>('tradeinrequests');
    }

    public get(id) {
        return this.api.get<TradeInRequestModel>(`tradeinrequests/${id}`);
    }
}
