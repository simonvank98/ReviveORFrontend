import {ProductModel} from '../../../shared/services/product/product.model';

export interface CartItem {
    productId: number;
    quantity: number;
    product: ProductModel;
}
