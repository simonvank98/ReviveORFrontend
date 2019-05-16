import {ProductImageModel} from './product-image.model';

export interface ProductModel {
  id: number;
  name: string;
  categoryId: number;
  status: string;
  price: number;
  conditionId: number;
  images: ProductImageModel[];
}
