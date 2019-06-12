import {Component, OnInit} from '@angular/core';
import {StoryModel} from '../../shared/services/stories/story.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-story-page',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss']
})
export class StoryListComponent implements OnInit {
    stories: StoryModel[];
    // displayedStories = [] as StoryModel[];
    displayedStories: StoryModel[];


    constructor(private route: ActivatedRoute) { }


    ngOnInit() {
        console.log(this.route.snapshot.data['stories']);
      this.stories = this.route.snapshot.data['stories'];
      this.displayedStories = this.stories;
  }

}
