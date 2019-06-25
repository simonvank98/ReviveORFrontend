import {Component, OnInit} from '@angular/core';
import {TradeInProcessService} from '../trade-in-process.service';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {TradeInRequestImageModel} from '../../../shared/services/trade-in/models/trade-in-request-image.model';
import {SnackbarService} from '../../../shared/services/snackbar/snackbar.service';
import {FileUploaderEvent} from '../../../shared/components/mass-file-uploader/file-uploader.event';

@Component({
    selector: 'app-trade-in-request-finalization',
    templateUrl: './trade-in-request-finalization.component.html',
    styleUrls: ['./trade-in-request-finalization.component.scss']
})
export class TradeInRequestFinalizationComponent implements OnInit {

    requiredAmountOfImages = 2;

    allowedImageExtensions = ['.png', '.jpg', '.jpeg', '.bmp'];
    imageAPIUrl = `${environment.reviveORAPIUrl}images`;

    images: TradeInRequestImageModel[];

    constructor(public tradeInProcessService: TradeInProcessService,
                private router: Router,
                private snackBarService: SnackbarService) {
    }

    ngOnInit() {
        this.tradeInProcessService.setCurrentStep(2);
        this.initializeImages();
    }

    onNextClicked() {
        if (this.images.length !== this.requiredAmountOfImages) {
            this.snackBarService.show('Please upload two images of your jewellery piece.', 3000);
        } else {
            this.tradeInProcessService.setImages(this.images);
            this.router.navigate(['/trade-in/overview']);
        }
    }

    onBackClicked() {
        this.router.navigate(['/trade-in/indication']);
    }

    onImageUploaded(event: FileUploaderEvent) {
        this.images.push(event.response);
    }

    onImageUploadError(event: FileUploaderEvent) {
        this.snackBarService.show('An error occurred during the upload of your file. ' +
            'Please make sure the image file size is below the maximum file size of 5MB or please try again later.', 7500);
    }

    private initializeImages() {
        if (this.tradeInProcessService.hasImages()) {
            this.images = this.tradeInProcessService.getImages();
        } else {
            this.images = [];
        }
    }
}
