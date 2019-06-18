import {Component, OnInit, ViewChild} from '@angular/core';
import {StoryModel} from '../../../../shared/services/stories/story.model';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../../../environments/environment';
import {ImageGalleryComponent} from '../../../../shared/components/image-gallery/image-gallery.component';
import {SnackbarService} from '../../../../shared/services/snackbar/snackbar.service';
import {NgxGalleryAction} from 'ngx-gallery';
import {ModalService} from '../../../../shared/services/modal-service/modal.service';
import {NgForm} from '@angular/forms';
import {StoryService} from '../../../../shared/services/stories/story.service';
import {ProductModel} from '../../../../shared/services/product/product.model';
import {ProductService} from '../../../../shared/services/product/product.service';

@Component({
  selector: 'app-admin-stories-edit',
  templateUrl: './admin-stories-edit.component.html',
  styleUrls: ['./admin-stories-edit.component.scss']
})
export class AdminStoriesEditComponent implements OnInit {
    story: StoryModel;
    productsWithoutStories: ProductModel[];

    imageAPIUrl = `${environment.reviveORAPIUrl}images`;
    displayedImages: string[];
    imageFile: File;

    @ViewChild(ImageGalleryComponent)
    gallery: ImageGalleryComponent;

    @ViewChild('f') form: NgForm;

    constructor(private route: ActivatedRoute,
                private snackbarService: SnackbarService,
                private modalService: ModalService,
                private router: Router,
                private storyService: StoryService,
                private productService: ProductService) { }

  ngOnInit() {
      this.story = this.route.snapshot.data['story'];
      this.productsWithoutStories = this.route.snapshot.data['products'];
      if (this.story.productId) {
          this.productService.getProduct(this.story.productId).subscribe((product) => {
              this.productsWithoutStories = [product, ...this.productsWithoutStories];
          });
      }
      this.refreshDisplayedImages();
  }

    onBackButtonClicked() {
            this.router.navigate(['/admin/stories']);
    }

    onDeleteButtonClicked() {
        this.modalService.confirm('Are you sure?').subscribe((confirmed) => {
            if (confirmed) {
                this.storyService.deleteStory(this.story).subscribe((res) => {
                    this.router.navigate(['/admin/stories']);
                    this.snackbarService.show('Story deleted!');
                }, (err) => {
                    this.snackbarService.show('Something went wrong while deleting the story');
                });
            }
        });
    }

    onSaveButtonClicked() {
        if (this.form.valid) {
            this.modalService.confirm('Are you sure you wish to edit the story?').subscribe((confirmed) => {
                if (confirmed) {
                    this.storyService.editStory(this.story).subscribe((res) => {
                        this.router.navigate(['/admin/stories']);
                        this.snackbarService.show('Your changes have succesfully been saved!');
                    }, (err) => {
                        this.snackbarService.show('Something went wrong while saving your changes');
                    });
                }
            });
        } else {
            this.snackbarService.show('Please fill out all required fields');
        }
    }

    bindStoryToProduct() {
        console.log(this.story);
    }

    onFileSelected($event: FileList) {
        this.imageFile = $event.item(0);
    }

    galleryDeleteImageAction(isThumbnailAction: boolean): NgxGalleryAction {
        return new NgxGalleryAction({
            icon: isThumbnailAction ? 'fa fa-times' : 'fa fa-trash',
            titleText: 'Delete this image',
            onClick: (event: Event, index: number) => this.onImageDeleteClicked(event, index),
        });
    }

    onImageDeleteClicked(event: Event, imageIndex: number) {
        if (this.displayedImages.length === 0) { return; }

        this.modalService.confirm('Are you sure you wish to delete this image?').subscribe(
            (confirmed) => {
                if (confirmed) {
                    this.displayedImages.splice(imageIndex, 1);
                    this.story.images.splice(imageIndex, 1);
                    this.displayedImages = this.displayedImages.slice(); // trigger change detection by changing reference
                    this.gallery.closePreview();
                }
            }
        );
        // Todo possibly call the api to delete the already uploaded image
    }

    onImageUploadSuccess(event) {
        this.story.images.push(event);
        this.imageFile = null;
        this.refreshDisplayedImages();
    }

    onImageUploadCancelled() {
        this.imageFile = null;
    }

    onImageUploadError(event) {
        this.imageFile = null;
        this.snackbarService.show('An error occurred during the upload of your file. ' +
            'Please make sure the image file size is below the maximum file size of 5MB.', 7500);
    }


    private refreshDisplayedImages() {
        this.displayedImages = [];
        for (const image of this.story.images) {
            this.displayedImages.push(image.url);
        }
    }
}
