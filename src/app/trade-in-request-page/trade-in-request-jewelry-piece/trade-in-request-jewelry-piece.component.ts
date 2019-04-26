import { TempApiService } from './../../shared/temp-api.service';
import { ORProductService } from './../../shared/services/or-product.service';
import { Component, OnInit } from '@angular/core';
import { TradeInProcessService } from 'src/app/shared/services/trade-in-process.service';
import { Router } from '@angular/router';
import { ORProduct } from 'src/app/shared/models/or-product';

@Component({
  selector: 'app-trade-in-request-jewelry-piece',
  templateUrl: './trade-in-request-jewelry-piece.component.html',
  styleUrls: ['./trade-in-request-jewelry-piece.component.scss'],
  providers: [
      TempApiService
  ]
})
export class TradeInRequestJewelryPieceComponent implements OnInit {

    allProducts: ORProduct[];
    products: ORProduct[] = [];
    tradeInParameters = this.tradeInProcessService.tradeInProcessContainer;

    constructor(private tradeInProcessService: TradeInProcessService,
                private orProductService: ORProductService,
                private router: Router) { }

    ngOnInit() {
      const buttons = <NodeListOf<HTMLElement>>document.querySelectorAll('button');
      for (let i = 0; i < buttons.length; i++) {
        const button = <HTMLElement>buttons[i];
        if (this.tradeInProcessService.tradeInProcessContainer.jewelryMaterial === button.innerText) {
          button.classList.add('selected');
        }
      }
      this.orProductService.getAll().subscribe(data => {
        this.orProductService.getAll().subscribe(data => {
            this.allProducts = data;
            this.filterProducts();
        });
    });
    }

    filterProducts() {
        this.allProducts.forEach((product: ORProduct) => {
            console.log(this.allProducts[0] instanceof ORProduct);
            // if (product.isType(this.tradeInProcessService.tradeInProcessContainer.jewelryType) &&
            //     product.isMaterial(this.tradeInProcessService.tradeInProcessContainer.jewelryMaterial)) {
            //     this.products.push(product);
            // }
        });
    }

    onItemClicked(event, item) {
      this.tradeInProcessService.setModel(item);
      const buttons = <NodeListOf<HTMLElement>>document.querySelectorAll('button');
      for (let i = 0; i < buttons.length; i++) {
        const button = <HTMLElement>buttons[i];
        button.classList.remove('selected');
      }
      event.srcElement.classList.add('selected');
    }

    onNextClicked() {
      if (this.tradeInProcessService.tradeInProcessContainer.jewelryType.length > 0) {
        // this.router.navigate(['/trade-in/material']);
      } else {
          console.log('ded');
      }
    }

    onBackClicked() {
      this.router.navigate(['/trade-in/material']);
    }

}
