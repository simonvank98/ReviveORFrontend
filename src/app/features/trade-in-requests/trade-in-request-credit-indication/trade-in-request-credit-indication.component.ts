import {CreditIndicationService} from './../../../shared/services/credit-indication/credit-indication.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TradeInProcessService} from '../trade-in-process.service';
import {CountUp} from 'countup.js';

@Component({
    selector: 'app-trade-in-request-credit-indication',
    templateUrl: './trade-in-request-credit-indication.component.html',
    styleUrls: ['./trade-in-request-credit-indication.component.scss']
})
export class TradeInRequestCreditIndicationComponent implements OnInit {

    color = 'primary';
    mode = 'determinate';
    percentage = 0;
    headerText = 'Credit you may receive for your jewellery!';
    disclaimerText = 'Note that this is an automatic credit indication. It is not final and therefore not a guarantee. The final credit received is subject to physical item inspection.';

    indication: any = 0;

    private countUpOptions = { decimalPlaces: 2, duration: 1.5, decimal: ',', separator: '.' };

    constructor(public tradeInProcessService: TradeInProcessService,
                private creditIndicationService: CreditIndicationService,
                private router: Router) { }

    ngOnInit() {
        this.tradeInProcessService.setCurrentStep(1);
        if (!this.tradeInProcessService.hasPiece()) {
            this.percentage = 100;
            this.indication = '?';
            this.headerText = 'No automatic credit indication possible';
            this.disclaimerText = 'Note that because no jewellery piece was selected, automatic credit indication is no possible. A manual credit indication will be given instead after completing the trade-in request. The final credit indication is subject to physical item inspection.';
        } else {
            this.showIndication();
        }
    }

    onNextClicked() {
        this.router.navigate(['/trade-in/finalize']);
    }

    onBackClicked() {
        this.router.navigate(['/trade-in/condition']);
    }

    private showIndication() {
        this.creditIndicationService.getIndication(this.tradeInProcessService.tradeInProcessContainer).subscribe(indication => {
            this.indication = indication['indication'];
            this.percentage = 100; // (indication['indication'] / indication['basePrice']) * 100;
            this.tradeInProcessService.tradeInProcessContainer.estimatedCredit = this.indication;

            new CountUp('indication-amount', this.indication, this.countUpOptions).start();
        });
    }
}
