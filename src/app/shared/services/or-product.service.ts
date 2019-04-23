import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ORProduct } from '../models/or-product';
import { TempApiService } from '../temp-api.service';

@Injectable({
  providedIn: 'root'
})
export class ORProductService {

    constructor(private api: TempApiService) { }

    public getAll(): Observable<ORProduct[]> {
        return this.api.get<ORProduct[]>('products');
    }

}
