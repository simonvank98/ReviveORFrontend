import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductModel} from '../../../../shared/services/product/product.model';
import {NgxGalleryAction} from 'ngx-gallery';
import {ImageGalleryComponent} from '../../../../shared/components/image-gallery/image-gallery.component';
import {environment} from '../../../../../environments/environment';
import {NgForm} from '@angular/forms';
import {ModalService} from '../../../../shared/services/modal-service/modal.service';
import {ProductService} from '../../../../shared/services/product/product.service';
import {SnackbarService} from '../../../../shared/services/snackbar/snackbar.service';
import {ProductCategoryModel} from '../../../../shared/services/product/product-category.model';
import {ProductRatingModel} from '../../../../shared/services/product/product-rating.model';
import {StoryModel} from '../../../../shared/services/stories/story.model';

@Component({
    selector: 'app-admin-products-edit',
    templateUrl: './admin-product-edit.component.html',
    styleUrls: ['./admin-product-edit.component.scss']
})
export class AdminProductEditComponent implements OnInit {
    product: ProductModel;

    productCategories: ProductCategoryModel[];
    productRatings: ProductRatingModel[];
    stories: StoryModel[];

    imageAPIUrl = `${environment.reviveORAPIUrl}images`;
    displayedImages: string[];
    imageFile: File;

    @ViewChild(ImageGalleryComponent)
    gallery: ImageGalleryComponent;

    @ViewChild('f') form: NgForm;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private productService: ProductService,
                private snackbarService: SnackbarService,
                private modalService: ModalService) {
    }

    ngOnInit() {
        this.product = this.route.snapshot.data['product'];
        this.productCategories = this.route.snapshot.data['productCategories'];
        this.productRatings = this.route.snapshot.data['productRatings'];
        this.stories = this.route.snapshot.data['stories'];
        if (this.product.story) {
            this.stories = [this.product.story, ...this.stories];
        }
        this.refreshDisplayedImages();
    }

    onBackClicked() {
        this.router.navigate(['/admin/products']);
    }

    onSaveButtonClicked() {
        document.getElementById('submitform').classList.add('submitted');
        if (this.form.valid) {
            this.modalService.confirm('Are you sure?').subscribe((confirmed) => {
                if (confirmed) {
                    this.productService.editProduct(this.product).subscribe((res) => {
                        this.router.navigate(['/admin/products']);
                        this.snackbarService.show('Your changes have successfully been saved!');
                    }, (err) => {
                        this.snackbarService.show('Something went wrong while saving your changes');
                    });
                }
            });
        } else {
            this.snackbarService.show('Please fill out all required fields');
        }
    }

    onDeleteButtonClicked() {
        this.modalService.confirm('Are you sure?').subscribe((confirmed) => {
            if (confirmed) {
                this.productService.deleteProduct(this.product).subscribe((res) => {
                    this.router.navigate(['/admin/products']);
                    this.snackbarService.show('Product deleted!');
                }, (err) => {
                    this.snackbarService.show('Something went wrong while deleting the product');
                });
            }
        });
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
                    this.product.images.splice(imageIndex, 1);
                    this.displayedImages = this.displayedImages.slice(); // trigger change detection by changing reference
                    this.gallery.closePreview();
                }
            }
        );
        // Todo possibly call the api to delete the already uploaded image
    }


    onImageUploadSuccess(event) {
        this.product.images.push(event);
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
        for (const image of this.product.images) {
            this.displayedImages.push(image.url);
        }
    }

    onRatingStarsClicked(event) {
        this.product.ratingId = event.rating;
    }
}
