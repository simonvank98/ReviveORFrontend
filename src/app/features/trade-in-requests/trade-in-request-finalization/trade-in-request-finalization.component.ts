import {Component, OnInit} from '@angular/core';
import {TradeInProcessService} from '../trade-in-process.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-trade-in-request-finalization',
    templateUrl: './trade-in-request-finalization.component.html',
    styleUrls: ['./trade-in-request-finalization.component.scss']
})
export class TradeInRequestFinalizationComponent implements OnInit {

    formGroup: FormGroup;
    allowedImageExtensions = ['.png', '.jpg', '.jpeg', '.bmp'];
    imageAPIUrl = `${environment.reviveORAPIUrl}images`;

    constructor(private tradeInProcessService: TradeInProcessService, private router: Router, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.setupFormGroup();
    }

    onNextClicked() {
        if (this.formGroup.valid) {
            this.router.navigate(['/trade-in/complete']);
        } else {
            console.log('ded');
        }
    }

    onBackClicked() {
        this.router.navigate(['/trade-in/overview']);
    }

    private setupFormGroup() {
        this.formGroup = this.formBuilder.group({
            storyTitle: ['', Validators.required],
            storyContent: ['', Validators.required],
            images: ['', Validators.required],
            additionalNotes: ['', Validators.required],
        });
    }
}
