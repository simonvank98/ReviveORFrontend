import { Component, OnInit } from '@angular/core';
import { TradeInProcessService } from 'src/app/shared/services/trade-in-process.service';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';

@Component({
  selector: 'app-trade-in-request-jewelry-type',
  templateUrl: './trade-in-request-jewelry-type.component.html',
  styleUrls: ['./trade-in-request-jewelry-type.component.scss']
})
export class TradeInRequestJewelryTypeComponent implements OnInit {

  constructor(public tradeInProcessService: TradeInProcessService, 
              private router: Router,
              private snackBarService: SnackbarService) { }

  ngOnInit() {}

  onButtonClicked(event) {
    this.tradeInProcessService.setType(event.value);
  }

  onNextClicked() {
    if (this.tradeInProcessService.tradeInProcessContainer.jewelryType.length > 0) {
      this.router.navigate(['/trade-in/material']);
    } else {
      this.snackBarService.show('Please choose your jewelry type.');
    }
  }

  onBackClicked() {

  }
}
