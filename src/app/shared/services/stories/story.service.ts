import {Injectable} from '@angular/core';
import {APIService} from '../api/api.service';
import {StoryModel} from './story.model';
import {ProductModel} from '../product/product.model';

@Injectable({
    providedIn: 'root'
})
export class StoryService {
    constructor(private api: APIService) {}

    public getAllStories() {
        return this.api.get<StoryModel[]>('stories');
    }

    public getStory(id: number) {
        return this.api.get<StoryModel>(`stories/${id}`);
    }
}
