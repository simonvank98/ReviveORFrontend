import {Component, Input, OnInit} from '@angular/core';
import {StoryModel} from '../../../shared/services/stories/story.model';

@Component({
    selector: 'app-story-item',
    templateUrl: './story-item.component.html',
    styleUrls: ['./story-item.component.scss']
})

export class StoryItemComponent implements OnInit {
    @Input() story: StoryModel;
    @Input() index: number;

    constructor() {}

    ngOnInit() {
    }
}
