import {EventEmitter, Injectable} from '@angular/core';
import {ProductModel} from './product.model';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) {}

    public getAll() {
        return this.http.get(`${environment.reviveORAPIUrl}products`).pipe(delay(1));
    }

    public getProduct(id: number) {
        return this.http.get(`${environment.reviveORAPIUrl}products/` + id).pipe(delay(1));
    }
}
