import { Component, OnInit } from '@angular/core';
import { TradeInProcessService } from 'src/app/shared/services/trade-in-process.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-trade-in-request-overview',
    templateUrl: './trade-in-request-overview.component.html',
    styleUrls: ['./trade-in-request-overview.component.scss']
})
export class TradeInRequestOverviewComponent implements OnInit {

    conditionModels = [];
    formatters = [(content) => content, (content) => (content === true ? 'Yes' : 'No')];

    constructor(private tradeInProcessService: TradeInProcessService, private router: Router) { }

    ngOnInit() {
        this.tradeInProcessService.setCurrentStep(2);
        const conditions = this.tradeInProcessService.getCondition();
        Object.keys(conditions).forEach(key => {
            this.conditionModels.push({'name': key, 'value': conditions[key]});
        });
    }

    onNextClicked() {

    }

    onBackClicked() {
        this.router.navigate(['/trade-in/indication']);
    }

}
