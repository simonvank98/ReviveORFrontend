import { Injectable } from '@angular/core';
import { TempApiService } from '../temp-api.service';
import { Observable } from 'rxjs';
import { CreditIndicationModifier } from '../models/credit-indication-modifier';

@Injectable({
    providedIn: 'root'
})
export class CreditIndicationModifierService {

    constructor(private api: TempApiService) { }

    public getAll(): Observable<CreditIndicationModifier[]> {
        return this.api.get<CreditIndicationModifier[]>('modifiers');
    }
}
