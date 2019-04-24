import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TradeInProcessService } from 'src/app/shared/services/trade-in-process.service';

@Component({
  selector: 'app-trade-in-request-jewelry-material',
  templateUrl: './trade-in-request-jewelry-material.component.html',
  styleUrls: ['./trade-in-request-jewelry-material.component.scss']
})
export class TradeInRequestJewelryMaterialComponent implements OnInit {

  constructor(private tradeInProcessService: TradeInProcessService, private router: Router) { }

  ngOnInit() {

  }

  onNextClicked() {
    if (this.tradeInProcessService.tradeInProcessContainer.jewelryMaterial.length > 0) {
      this.router.navigate(['/trade-in/piece']);
    } else {
        console.log('ded');
    }
  }

  onBackClicked() {
    this.router.navigate(['/trade-in/type']);
  }

}
