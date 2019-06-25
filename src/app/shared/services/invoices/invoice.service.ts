import {Injectable} from '@angular/core';
import {InvoiceModel} from './invoice.model';
import {APIService} from '../api/api.service';

@Injectable({
    providedIn: 'root'
})
export class InvoiceService {

    constructor(private api: APIService) {}

    public getAllForSelf() {
        return this.api.get<InvoiceModel[]>('invoices/me');
    }
}
