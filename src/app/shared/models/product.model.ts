import {ProductCategoryModel} from './product-category.model';
import {ProductConditionModel} from './product-condition.model';
import {ProductImageModel} from './product-image.model';

export interface ProductModel {
  id: number;
  name: string;
  categoryId: number;
  status: string;
  price: number;
  conditionId: number;
  productImage: ProductImageModel[];
}
