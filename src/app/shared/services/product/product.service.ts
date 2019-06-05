import {EventEmitter, Injectable} from '@angular/core';
import {ProductModel} from './product.model';

import {APIService} from '../api/api.service';
import {ProductRatingModel} from './product-rating.model';
import {ProductCategoryModel} from './product-category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    constructor(private api: APIService) {}

    public getAllProducts() {
        return this.api.get<ProductModel[]>('products');
    }

    public getProduct(id: number) {
        return this.api.get<ProductModel>(`products/${id}`);
    }

    public editProduct(product: ProductModel) {
        return this.api.put<ProductModel>(`products/${product.id}`, product);
    }

    public deleteProduct(product: ProductModel) {
        return this.api.delete(`products/${product.id}`);
    }

    public createProduct(product: ProductModel) {
        return this.api.post<ProductModel>('products', product);
    }

    public getAllCategories() {
        return this.api.get<ProductCategoryModel[]>('products/categories');
    }

    public getAllRatings() {
        return this.api.get<ProductRatingModel[]>('products/ratings');
    }
}
