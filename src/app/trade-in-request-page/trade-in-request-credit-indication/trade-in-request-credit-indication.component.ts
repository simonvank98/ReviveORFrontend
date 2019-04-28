import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { TradeInProcessService } from 'src/app/shared/services/trade-in-process.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-trade-in-request-credit-indication',
    templateUrl: './trade-in-request-credit-indication.component.html',
    styleUrls: ['./trade-in-request-credit-indication.component.scss']
})
export class TradeInRequestCreditIndicationComponent implements OnInit, AfterViewInit {

    color = 'primary';
    mode = 'determinate';

    @Input() value = 0;

    constructor(private tradeInProcessService: TradeInProcessService, private router: Router) { }

    ngOnInit() {
        this.tradeInProcessService.setCurrentStep(1);
        setTimeout(() => {
            this.value = 75;
        }, 100);
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
