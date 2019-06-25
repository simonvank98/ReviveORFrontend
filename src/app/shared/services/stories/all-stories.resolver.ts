import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {StoryService} from './story.service';
import {StoryModel} from './story.model';

@Injectable()
export class AllStoriesResolver implements Resolve <StoryModel[]> {
    constructor(private storyService: StoryService) {}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
    ): Observable<any>|Promise<any> {
        return this.storyService.getAllStories();
    }
}
