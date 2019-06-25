import {ProductImageModel} from './product-image.model';
import {ProductCategoryModel} from './product-category.model';
import {ProductRatingModel} from './product-rating.model';
import {StoryModel} from '../stories/story.model';

export interface ProductModel {
    id?: number;
    name: string;
    description: string;
    status: string;
    price: number;
    material: string;
    property: string;
    categoryId: number;
    ratingId: number;
    storyId: number;

    images: ProductImageModel[];
    category?: ProductCategoryModel;
    rating?: ProductRatingModel;
    story?: StoryModel;

    createdAt?: Date;
    updatedAt?: Date;
}
