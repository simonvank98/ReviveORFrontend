import {Component, OnInit} from '@angular/core';
import {TradeInProcessService} from '../trade-in-process.service';
import {Router} from '@angular/router';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import {TradeInRequestModel} from '../../../admin/features/trade-in-requests/models/trade-in-request.model';
import {TradeInRequestImageModel} from '../../../admin/features/trade-in-requests/models/trade-in-request-image.model';
import {CreditIndicationService} from '../../../shared/services/credit-indication/credit-indication.service';

@Component({
    selector: 'app-trade-in-request-finalization',
    templateUrl: './trade-in-request-finalization.component.html',
    styleUrls: ['./trade-in-request-finalization.component.scss']
})
export class TradeInRequestFinalizationComponent implements OnInit {

    allowedImageExtensions = ['.png', '.jpg', '.jpeg', '.bmp'];
    imageAPIUrl = `${environment.reviveORAPIUrl}images`;
    formGroup: FormGroup;

    get images() {
        return this.formGroup.get('images') as FormArray;
    }

    constructor(private tradeInProcessService: TradeInProcessService, private creditIndicationService: CreditIndicationService, private router: Router, private fb: FormBuilder) {
    }

    ngOnInit() {
        this.setupFormGroup();
    }

    onNextClicked() {
        console.log('form group', this.formGroup.getRawValue());
        console.log('form group controls images', this.formGroup.controls['images']);
        if (this.formGroup.valid) {
            const tradeInRequest = this.createTradeInRequestModel();
            console.log('tradeinrequest', tradeInRequest);
            this.tradeInProcessService.submitRequest(tradeInRequest).subscribe(() => {
                this.router.navigate(['/trade-in/complete']);
            }, (err) => {
                // Todo show snackbar indicating error
                console.log(err);
            });
        } else {
            console.log('ded');
        }
    }

    // Todo: Add a tradeinrequest model interface
    private createTradeInRequestModel(): TradeInRequestModel {
        const processContainer = this.tradeInProcessService.tradeInProcessContainer;
        const tradeInRequest = {
            ...this.formGroup.getRawValue(),
            estimatedCredit: processContainer.estimatedCredit,
            jewelryName: processContainer.jewelryPiece.name,
            jewelrySize: processContainer.property,
            jewelryCondition: {
                broken: processContainer.broken,
                bent: processContainer.bent,
                scratched: processContainer.scratched,
                missingPiece: processContainer.missing,
            }
        };
        return tradeInRequest as TradeInRequestModel;
    }

    onBackClicked() {
        this.router.navigate(['/trade-in/overview']);
    }

    onImageUploaded(response: TradeInRequestImageModel) {
        console.log('image id', response.imageId);
        this.images.push(this.createImage(response.imageId));
    }

    private createImage(imageId): FormGroup {
        return this.fb.group({
            imageId: [imageId],
        });
    }

    private setupFormGroup() {
        this.formGroup = this.fb.group({
            storyTitle: ['', Validators.required],
            storyContent: ['', Validators.required],
            images: this.fb.array([], Validators.required),
            additionalNotes: ['', Validators.required],
        });
    }
}
