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

    private indication = 0;

    private options = { decimalPlaces: 2, duration: 1.5, decimal: ',', separator: '.' };

    constructor(private tradeInProcessService: TradeInProcessService,
                private creditIndicationService: CreditIndicationService,
                private router: Router) { }

    ngOnInit() {
        this.tradeInProcessService.setCurrentStep(1);
        this.creditIndicationService.getIndication(this.tradeInProcessService.tradeInProcessContainer).then(indication => {
            this.indication = indication['indication'];
            this.percentage = (indication['indication'] / indication['basePrice']) * 100;
            const countUp = new CountUp('indication-amount', this.indication, this.options).start();
        });
    }

    ngAfterViewInit() {

    }

    onNextClicked() {
        this.router.navigate(['/trade-in/overview']);
    }

    onBackClicked() {
        this.router.navigate(['/trade-in/condition']);
    }
}
