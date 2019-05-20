import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';
import { TempApiService } from 'src/app/shared/services/api/temp-api.service';
import { ORProduct } from 'src/app/shared/services/or-product/or-product.model';
import { TradeInProcessService } from '../trade-in-process.service';
import { ORProductService } from 'src/app/shared/services/or-product/or-product.service';

@Component({
    selector: 'app-trade-in-request-jewelry-selection',
    templateUrl: './trade-in-request-jewelry-selection.component.html',
    styleUrls: ['./trade-in-request-jewelry-selection.component.scss'],
    providers: [
        TempApiService
    ]
})
export class TradeInRequestJewelrySelectionComponent implements OnInit {

    products: ORProduct[] = [];

    constructor(public tradeInProcessService: TradeInProcessService,
        private orProductService: ORProductService,
        private router: Router,
        private snackBarService: SnackbarService) { }

    ngOnInit() {
        this.tradeInProcessService.setCurrentStep(0);
        const jewelryType = this.tradeInProcessService.getType();
        const jewelryMaterial = this.tradeInProcessService.getMaterial();

        this.orProductService.getAllWithTypeAndMaterial(jewelryType, jewelryMaterial).subscribe(data => {
            this.products = data;
        });
    }

    onButtonClicked(event) {
        this.tradeInProcessService.setPiece(event.value);
    }

    onNextClicked() {
        if (this.tradeInProcessService.hasPiece()) {
            this.router.navigate(['/trade-in/name']);
        } else {
            this.snackBarService.show('Please choose your jewelry piece.');
        }
    }

    onBackClicked() {
        this.router.navigate(['/trade-in/material']);
    }

}
