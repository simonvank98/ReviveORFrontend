import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {StoryModel} from './story.model';
import {StoryService} from './story.service';

@Injectable()
export class StoryResolver implements Resolve<StoryModel> {
    constructor(private storyService: StoryService) {}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
    ): Observable<any>|Promise<any> {
        return this.storyService.getStory(route.params.id);
    }


}
