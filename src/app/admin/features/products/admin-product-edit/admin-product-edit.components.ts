import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductModel} from '../../../../shared/services/product/product.model';
import {NgxGalleryAction} from 'ngx-gallery';
import {ModalService} from '../../../../shared/services/modal-service/modal.service';
import {ImageGalleryComponent} from '../../../../shared/components/image-gallery/image-gallery.component';
import {SnackbarService} from '../../../../shared/services/snackbar/snackbar.service';
import {environment} from '../../../../../environments/environment';

@Component({
    selector: 'app-admin-products-edit',
    templateUrl: './admin-product-edit.component.html',
    styleUrls: ['./admin-product-edit.component.scss']
})
export class AdminProductEditComponent implements OnInit {
    product: ProductModel;

    imageAPIUrl = `${environment.reviveORAPIUrl}images`;
    displayedImages: string[];
    imageFile: File;

    @ViewChild(ImageGalleryComponent)
    gallery: ImageGalleryComponent;

    constructor(private route: ActivatedRoute,
                private router: Router, private modalService: ModalService, private snackBarService: SnackbarService) {
    }

    ngOnInit() {
        this.product = this.route.snapshot.data['product'];
        this.refreshDisplayedImages();
        //this.product.category = this.route.snapshot.data['productCategory'];
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
        console.log('image upload error', event);
        this.imageFile = null;
        this.snackBarService.show('An error occurred during the upload of your file. ' +
            'Please make sure the image file size is below the maximum file size of 5MB.', 7500);
    }


    private refreshDisplayedImages() {
        this.displayedImages = [];
        for (const image of this.product.images) {
            this.displayedImages.push(image.url);
        }
    }
}
