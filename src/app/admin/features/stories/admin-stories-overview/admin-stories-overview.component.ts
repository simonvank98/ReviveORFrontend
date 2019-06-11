import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StoryService} from '../../../../shared/services/stories/story.service';

@Component({
  selector: 'app-admin-stories-overview',
  templateUrl: './admin-stories-overview.component.html',
  styleUrls: ['./admin-stories-overview.component.scss']
})
export class AdminStoriesOverviewComponent implements OnInit {
    stories = [];
    headers = ['Story no.', 'Story title', 'Date created', 'Status'];
    attributes = ['id', 'storyTitle', 'createdAt', 'status'];
    formatters = [(attr) => attr, (attr) => attr, (createdAt) => new Date(createdAt).toLocaleDateString(),  (attr) => attr];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private storyService: StoryService) { }

  ngOnInit() {
      this.stories = this.route.snapshot.data['stories'];
  }

    toEditStories(event) {
    this.router.navigate(['/admin/stories/edit/' + event.model.id]);
}
}
