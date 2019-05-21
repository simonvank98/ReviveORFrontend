import { CreditIndicationService } from './../../../shared/services/credit-indication/credit-indication.service';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { TradeInProcessService } from '../trade-in-process.service';
import { CountUp } from 'countup.js';

@Component({
    selector: 'app-trade-in-request-credit-indication',
    templateUrl: './trade-in-request-credit-indication.component.html',
    styleUrls: ['./trade-in-request-credit-indication.component.scss']
})
export class TradeInRequestCreditIndicationComponent implements OnInit, AfterViewInit {

    color = 'primary';
    mode = 'determinate';
    percentage = 0;
    pieceUnknown;
    headerText = 'Credit you may receive for your jewelry!';
    disclaimerText = 'Note that this is an automatic credit indication. It is not final and therefore not a guarantee. The final credit received is subject to physical item inspection.';

    private indication: any = 0;

    private options = { decimalPlaces: 2, duration: 1.5, decimal: ',', separator: '.' };

    constructor(private tradeInProcessService: TradeInProcessService,
                private creditIndicationService: CreditIndicationService,
                private router: Router) { }

    ngOnInit() {
        this.tradeInProcessService.setCurrentStep(1);
        if (!this.tradeInProcessService.hasPiece()) {
            this.percentage = 100;
            this.indication = '?';
            this.headerText = 'No automatic credit indication possible';
            this.disclaimerText = 'Note that because no jewelry piece was selected, automatic credit indication is no possible. A manual credit indication will be given instead after completing the trade-in request. The final credit indication is subject to physical item inspection.';
        } else {
            this.creditIndicationService.getIndication(this.tradeInProcessService.tradeInProcessContainer).then(indication => {
                this.indication = indication['indication'];
                this.percentage = (indication['indication'] / indication['basePrice']) * 100;
                this.tradeInProcessService.tradeInProcessContainer.estimatedCredit = this.indication;
                const countUp = new CountUp('indication-amount', this.indication, this.options).start();
            });
        }
    }

    ngAfterViewInit() {

    }

    onNextClicked() {
        this.router.navigate(['/trade-in/finalize']);
    }

    onBackClicked() {
        this.router.navigate(['/trade-in/name']);
    }
}
