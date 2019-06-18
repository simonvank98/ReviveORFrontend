import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TradeInProcessService} from '../trade-in-process.service';
import {TradeInProcessContainer} from '../trade-in-process-container.model';
import {SnackbarService} from '../../../shared/services/snackbar/snackbar.service';

@Component({
    selector: 'app-trade-in-request-overview',
    templateUrl: './trade-in-request-overview.component.html',
    styleUrls: ['./trade-in-request-overview.component.scss']
})
export class TradeInRequestOverviewComponent implements OnInit {

    conditionModels = [];
    formatters = [(content) => content, (content) => (content === true ? 'Yes' : 'No')];

    constructor(public tradeInProcessService: TradeInProcessService,
                private router: Router,
                private snackbarService: SnackbarService) {
    }

    ngOnInit() {
        this.tradeInProcessService.setCurrentStep(3);
        this.populateConditionTable();
    }


    onNextClicked() {
        const tradeInRequest = this.createTradeInRequestModel();

        this.tradeInProcessService.submitRequest(tradeInRequest).subscribe(() => {
            this.router.navigate(['/trade-in/complete']);
            this.tradeInProcessService.reset();
        }, (err) => {
            this.snackbarService.show('Something went wrong while sending your trade-in request. Please try again later!');
        });
    }

    onBackClicked() {
        this.router.navigate(['/trade-in/finalize']);
    }

    private createTradeInRequestModel(): TradeInProcessContainer {
        const processContainer = this.tradeInProcessService.tradeInProcessContainer;
        const tradeInRequest = {
            ...processContainer,
            jewelryName: processContainer.jewelryPiece.name,
            material: processContainer.jewelryMaterial,
            categoryId: processContainer.jewelryPiece.category.id,
        };
        return tradeInRequest as TradeInProcessContainer;
    }

    private populateConditionTable() {
        const conditions = this.tradeInProcessService.getCondition();
        Object.keys(conditions).forEach(key => {
            this.conditionModels.push({'name': key, 'value': conditions[key]});
        });
    }
}
