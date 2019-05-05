import {CreditIndicationModifier} from './credit-indication-modifier';
import {TempApiService} from '../../api/temp-api.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CreditIndicationModifierService {

    constructor(private api: TempApiService) {
    }

    public getAll(): Observable<CreditIndicationModifier[]> {
        return this.api.get<CreditIndicationModifier[]>('modifiers');
    }

    // There is no API filter option (yet), so do filtering client-sided.
    public getByCategory(categoryName: String): Observable<CreditIndicationModifier[]> {
        return this.getAll().pipe(
            map(modifiers => modifiers.filter(modifier => modifier.category.name === categoryName)));
    }
}
