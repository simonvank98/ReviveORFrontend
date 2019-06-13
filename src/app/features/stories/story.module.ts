import {NgModule} from '@angular/core';
import {StoryItemComponent} from './story-item/story-item.component';
import {StoryListComponent} from './story-list/story-list.component';
import {NewStoryComponent} from './new-story/new-story.component';
import {StoriesComponent} from './stories.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {CountUpModule} from 'countup.js-angular2';

@NgModule({
    declarations: [
        StoryItemComponent,
        StoryListComponent,
        NewStoryComponent,
        StoriesComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        CountUpModule,
    ],
})
export class StoryModule {
}
