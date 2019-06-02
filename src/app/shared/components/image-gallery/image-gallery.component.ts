import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {
    NgxGalleryAction,
    NgxGalleryAnimation,
    NgxGalleryComponent,
    NgxGalleryImage,
    NgxGalleryImageSize,
    NgxGalleryOptions, NgxGalleryPreviewComponent
} from 'ngx-gallery';

@Component({
    selector: 'app-image-gallery',
    templateUrl: './image-gallery.component.html',
    styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {

    @Input('imageURLs')
    set imageURLs(imageURLs: string[]) {
        if (imageURLs) {
            this.galleryImages = [];
            for (const image of imageURLs) {
                this.galleryImages.push({
                    small: image,
                    medium: image,
                    big: image
                });
            }
        }
    }

    @Input()
    extraGalleryPreviewActions: NgxGalleryAction[] = [];

    @Input()
    extraGalleryThumbnailActions: NgxGalleryAction[] = [];

    @Input()
    galleryOptions: NgxGalleryOptions[] = [];


    galleryImages: NgxGalleryImage[];

    @ViewChild(NgxGalleryComponent)
    private ngxGallery: NgxGalleryComponent;

    constructor() {
    }


    ngOnInit() {
        if (this.galleryOptions.length === 0) {
            this.setupGalleryOptions();
        }
    }


    closePreview() {
        this.ngxGallery.preview.close();
    }

    private setupGalleryOptions() {
        this.galleryOptions = [
            {
                width: '100%',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Fade,
                imageSize: NgxGalleryImageSize.Cover,
                /*                arrowPrevIcon: 'fa fa-chevron-left',
                                arrowNextIcon: 'fa fa-chevron-right',*/
                arrowPrevIcon: 'fa fa-arrow-circle-left',
                arrowNextIcon: 'fa fa-arrow-circle-right',
                thumbnailSize: NgxGalleryImageSize.Contain,
                imageArrows: false,
                imageInfinityMove: false,
                imageSwipe: true,
                imageArrowsAutoHide: true,
                thumbnailsArrows: true,
                thumbnailsSwipe: true,
                thumbnailActions: this.extraGalleryThumbnailActions,
                previewCloseOnEsc: true,
                previewCloseOnClick: false,
                /*                previewZoom: true,
                                previewRotate: true,*/
                actions: this.extraGalleryPreviewActions,
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
    }

}
