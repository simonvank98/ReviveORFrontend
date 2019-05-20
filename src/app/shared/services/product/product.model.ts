import {ProductImageModel} from './product-image.model';
import {ProductCategoryModel} from './product-category.model';
import {ProductRatingModel} from './product-rating.model';

export interface ProductModel {
  id: number;
  name: string;
  description: string;
  categoryId: number;
  status: string;
  price: number;
  conditionId: number;
  images: ProductImageModel[];
  category: ProductCategoryModel;
  rating: ProductRatingModel;
}
