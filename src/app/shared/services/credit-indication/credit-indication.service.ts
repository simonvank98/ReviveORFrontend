import {TradeInProcessContainer} from '../../../features/trade-in-requests/trade-in-process-container.model';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {APIService} from '../api/api.service';
import {CreditIndication} from './credit-indication.model';

@Injectable({
    providedIn: 'root'
})
export class CreditIndicationService {
    constructor(private api: APIService) {
    }

    public getIndication(tradeInProcessContainer: TradeInProcessContainer): Observable<CreditIndication> {
        return this.api.post<CreditIndication>('creditindication', this.createIndicationModel(tradeInProcessContainer));
    }

    public getExampleIndication(request): Observable<CreditIndication> {
        return this.api.post<CreditIndication>('creditindication', request);
    }


    private createIndicationModel(tradeInProcessContainer: TradeInProcessContainer) {
        const selectedProperty = tradeInProcessContainer.selectedProperty === '' ?
            tradeInProcessContainer.jewelryPiece.properties[0] : tradeInProcessContainer.selectedProperty;
        return {
            orProductId: tradeInProcessContainer.jewelryPiece.id,
            selectedProperty: selectedProperty,
            jewelryType: tradeInProcessContainer.jewelryType,
            jewelryCondition: tradeInProcessContainer.jewelryCondition
        };
    }
}
