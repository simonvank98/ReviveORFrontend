import { CreditIndicationModifier } from './../../../models/credit-indication-modifier';
import { TempApiService } from '../../api/temp-api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CreditIndicationModifierService {

    constructor(private api: TempApiService) { }

    public getAll(): Observable<CreditIndicationModifier[]> {
        return this.api.get<CreditIndicationModifier[]>('modifiers');
    }
}
