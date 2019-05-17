import {ProductImageModel} from './product-image.model';
import {ProductCategoryModel} from './product-category.model';
import {ProductConditionModel} from './product-condition.model';

export interface ProductModel {
  id: number;
  name: string;
  categoryId: number;
  status: string;
  price: number;
  conditionId: number;
  images: ProductImageModel[];
  category: ProductCategoryModel;
  condition: ProductConditionModel;
}
