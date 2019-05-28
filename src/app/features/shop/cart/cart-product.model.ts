import {ProductModel} from '../../../shared/services/product/product.model';

export interface CartItem {
  product: ProductModel;
  quantity: number;
}
