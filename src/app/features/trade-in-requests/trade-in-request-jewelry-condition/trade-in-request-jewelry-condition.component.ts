import { TradeInProcessService } from './../trade-in-process.service';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-trade-in-request-jewelry-condition',
    templateUrl: './trade-in-request-jewelry-condition.component.html',
    styleUrls: ['./trade-in-request-jewelry-condition.component.scss']
})
export class TradeInRequestJewelryConditionComponent implements OnInit {

    properties = [];

    constructor(private router: Router,
                public tradeInProcessService: TradeInProcessService,
                private snackBarService: SnackbarService) { }

    ngOnInit() {
        this.tradeInProcessService.setCurrentStep(0);
        this.tradeInProcessService.getPiece().properties.forEach(property => {
            if (property.value !== null) {
                this.properties.push(property);
            }
        });
    }

    onNextClicked() {
        if (this.tradeInProcessService.hasCondition()) {
            this.router.navigate(['/trade-in/indication']);
        } else {
            this.snackBarService.show('Please select all of the options.');
        }
    }

    onBackClicked() {
        this.router.navigate(['/trade-in/piece']);
    }

    onPropertyButtonClicked(event)  { this.tradeInProcessService.setProperty(event.value); }
    onMissingButtonClicked(event)   { this.tradeInProcessService.setMissing(event.value); }
    onScratchedButtonClicked(event) { this.tradeInProcessService.setScratched(event.value); }
    onBentButtonClicked(event)      { this.tradeInProcessService.setBent(event.value); }
    onBrokenButtonClicked(event)    { this.tradeInProcessService.setBroken(event.value); }

}
