import {StoryImageModel} from './story-image.model';
import {UserModel} from '../user/user.model';

export interface StoryModel {
    id: number;
    productId: number;
    storyTitle: string;
    storyContent: string;
    status: string;

    images: StoryImageModel[];
    user: UserModel;

    createdAt?: Date;
    updatedAt?: Date;
}
