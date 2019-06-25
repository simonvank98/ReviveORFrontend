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
    headers = ['Story no.', 'Story title', 'Status', 'Updated'];
    attributes = ['id', 'storyTitle', 'status', 'updatedAt'];
    formatters = [(attr) => attr, (attr) => attr,  (attr) => attr, (createdAt) => new Date(createdAt).toLocaleDateString()];

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
