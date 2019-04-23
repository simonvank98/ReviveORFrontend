import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TempApiService } from '../temp-api.service';
import { ORProduct } from './trade-in-process/or-product';

@Injectable({
  providedIn: 'root'
})
export class ORProductService {

    constructor(private api: TempApiService) { }

    public getAll(): Observable<ORProduct[]> {
        return this.api.get<ORProduct[]>('products');
    }

}
