import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SnackbarService} from 'src/app/shared/services/snackbar/snackbar.service';
import {APIService} from 'src/app/shared/services/api/api.service';
import {ORProduct} from 'src/app/shared/services/or-product/or-product.model';
import {TradeInProcessService} from '../trade-in-process.service';
import {ORProductService} from 'src/app/shared/services/or-product/or-product.service';

@Component({
    selector: 'app-trade-in-request-jewelry-selection',
    templateUrl: './trade-in-request-jewelry-selection.component.html',
    styleUrls: ['./trade-in-request-jewelry-selection.component.scss'],
    providers: [
        APIService
    ]
})
export class TradeInRequestJewelrySelectionComponent implements OnInit {

    products: ORProduct[] = [];
    productsLoaded = false;

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
            this.productsLoaded = true;
        });
    }

    onButtonClicked(event) {
        this.tradeInProcessService.setPiece(event.value);
    }

    onCustomClicked() {
        this.tradeInProcessService.setPiece({});
        this.router.navigate(['/trade-in/condition']);
    }

    onNextClicked() {
        if (this.tradeInProcessService.hasPiece()) {
            this.router.navigate(['/trade-in/condition']);
        } else {
            this.snackBarService.show('Please choose your jewellery piece.');
        }
    }

    onBackClicked() {
        this.router.navigate(['/trade-in/material']);
    }

}
