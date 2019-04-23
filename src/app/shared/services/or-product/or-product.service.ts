import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TempApiService } from '../../temp-api.service';
import { OrProductModel } from './or-product.model';

@Injectable({
  providedIn: 'root'
})
export class ORProductService {

    constructor(private api: TempApiService) { }

    public getAll(): Observable<OrProductModel[]> {
        return this.api.get<OrProductModel[]>('products');
    }

}
