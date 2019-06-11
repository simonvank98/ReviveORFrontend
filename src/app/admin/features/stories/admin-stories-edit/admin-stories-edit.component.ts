import { Component, OnInit } from '@angular/core';
import {StoryModel} from '../../../../shared/services/stories/story.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin-stories-edit',
  templateUrl: './admin-stories-edit.component.html',
  styleUrls: ['./admin-stories-edit.component.scss']
})
export class AdminStoriesEditComponent implements OnInit {
  story: StoryModel;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.story = this.route.snapshot.data['story'];
      console.log(this.story);
  }

}
