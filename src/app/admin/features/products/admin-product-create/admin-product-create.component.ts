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

@Component({
    selector: 'app-admin-products-create',
    templateUrl: './admin-product-create.component.html',
    styleUrls: ['./admin-product-create.component.scss']
})
export class AdminProductCreateComponent implements OnInit {
    product: ProductModel;

    productCategories: ProductCategoryModel[];
    productRatings: ProductRatingModel[];

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
        this.product = {
            categoryId: null,
            conditionId: 0,
            storyId: 0,
            ratingId: 1,
            name: '',
            description: '',
            status: '',
            images: [],
            material: '',
            price: 0,
            property: ''
        } as ProductModel;
        this.productCategories = this.route.snapshot.data['productCategories'];
        this.productRatings = this.route.snapshot.data['productRatings'];
        this.refreshDisplayedImages();
    }

    onSaveButtonClicked() {
        document.getElementById('submitform').classList.add('submitted');
        if (this.form.valid) {
            this.modalService.confirm('Are you sure?').subscribe((confirmed) => {
                if (confirmed) {
                    this.productService.createProduct(this.product).subscribe((res) => {
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

    onCancelButtonClicked() {
        this.modalService.confirm('Are you sure you want to cancel all pending changes?').subscribe((confirmed) => {
            if (confirmed) {
                this.router.navigate(['/admin/products']);
                this.snackbarService.show('Your changes have successfully been canceled!');

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
