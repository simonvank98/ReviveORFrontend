import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ProductRatingModel} from './product-rating.model';
import {ProductService} from './product.service';

@Injectable()
export class AllProductRatingsResolver implements Resolve <ProductRatingModel[]> {
    constructor(private productService: ProductService) {}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
    ): Observable<any>|Promise<any> {
        return this.productService.getAllRatings();
    }
}
