import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ProductService} from './product.service';
import {ProductModel} from './product.model';

@Injectable()
export class AllProductWithoutStoryResolver implements Resolve <ProductModel[]> {
    constructor(private productService: ProductService) {}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
    ): Observable<any>|Promise<any> {
        return this.productService.getAllProductsWithoutStory();
    }
}
