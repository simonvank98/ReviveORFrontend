import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-trade-in-request-credit-indication',
    templateUrl: './trade-in-request-credit-indication.component.html',
    styleUrls: ['./trade-in-request-credit-indication.component.scss']
})
export class TradeInRequestCreditIndicationComponent implements OnInit, AfterViewInit {

    color = 'primary';
    mode = 'determinate';

    @Input() value = 0;

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.value = 75;
        }, 100);
    }

}
