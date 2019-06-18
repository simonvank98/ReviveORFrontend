import {Component, Input, OnInit} from '@angular/core';
import {StoryModel} from '../../../shared/services/stories/story.model';
import {environment} from '../../../../environments/environment';
import {NgxGalleryAnimation, NgxGalleryImageSize, NgxGalleryOptions} from 'ngx-gallery';

@Component({
    selector: 'app-story-item',
    templateUrl: './story-item.component.html',
    styleUrls: ['./story-item.component.scss']
})

export class StoryItemComponent implements OnInit {
    @Input() story: StoryModel;
    @Input() index: number;

    galleryOptions: NgxGalleryOptions[] = [
        {
            width: '100%',
            imageAnimation: NgxGalleryAnimation.Fade,
            imageSize: NgxGalleryImageSize.Contain,
            arrowPrevIcon: 'fa fa-arrow-circle-left',
            arrowNextIcon: 'fa fa-arrow-circle-right',
            thumbnails: false,
            imageArrows: false,
            imageInfinityMove: false,
            imageSwipe: true,
            imageArrowsAutoHide: true,
            previewCloseOnEsc: true,
            previewCloseOnClick: false,
        },
        // max-width 800
        {
            breakpoint: 800,
            width: '100%',
            thumbnailsMargin: 20,
            thumbnailMargin: 20
        },
        // max-width 500
        {
            breakpoint: 500,
            imagePercent: 85,
            thumbnailsPercent: 15,
            thumbnailsMargin: 10,
            preview: false
        }
    ];

    displayedImages: string[];

    constructor() {}

    ngOnInit() {
        this.refreshDisplayedImages();
    }

    private refreshDisplayedImages() {
        this.displayedImages = [];
     for (const image of this.story.images) {
            this.displayedImages.push(image.url);
     }
}
}
