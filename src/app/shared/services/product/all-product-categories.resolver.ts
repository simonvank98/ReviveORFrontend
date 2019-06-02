import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ProductCategoryModel} from './product-category.model';
import {ProductService} from './product.service';

@Injectable()
export class AllProductCategoriesResolver implements Resolve <ProductCategoryModel[]> {
    constructor(private productService: ProductService) {}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
    ): Observable<any>|Promise<any> {
        return this.productService.getAllCategories();
    }
}
