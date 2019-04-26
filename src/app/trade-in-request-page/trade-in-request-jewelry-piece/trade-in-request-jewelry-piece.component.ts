import { TempApiService } from './../../shared/temp-api.service';
import { ORProductService } from './../../shared/services/or-product.service';
import { Component, OnInit } from '@angular/core';
import { TradeInProcessService } from 'src/app/shared/services/trade-in-process.service';
import { Router } from '@angular/router';
import { ORProduct } from 'src/app/shared/models/or-product';
import { MatSnackBar } from '@angular/material';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';

@Component({
  selector: 'app-trade-in-request-jewelry-piece',
  templateUrl: './trade-in-request-jewelry-piece.component.html',
  styleUrls: ['./trade-in-request-jewelry-piece.component.scss'],
  providers: [
      TempApiService
  ]
})
export class TradeInRequestJewelryPieceComponent implements OnInit {

    products: ORProduct[] = [];

    constructor(private tradeInProcessService: TradeInProcessService,
                private orProductService: ORProductService,
                private router: Router,
                private snackBarService: SnackbarService) { }

    ngOnInit() {
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
        // this.router.navigate(['/trade-in/material']);
      } else {
        this.snackBarService.show('Please choose your jewelry piece.');
      }
    }

    onBackClicked() {
      this.router.navigate(['/trade-in/material']);
    }

}
