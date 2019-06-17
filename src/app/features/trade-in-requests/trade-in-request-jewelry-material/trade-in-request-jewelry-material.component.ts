import {TradeInProcessService} from 'src/app/features/trade-in-requests/trade-in-process.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SnackbarService} from 'src/app/shared/services/snackbar/snackbar.service';

@Component({
  selector: 'app-trade-in-request-jewelry-material',
  templateUrl: './trade-in-request-jewelry-material.component.html',
  styleUrls: ['./trade-in-request-jewelry-material.component.scss']
})
export class TradeInRequestJewelryMaterialComponent implements OnInit {

  constructor(public tradeInProcessService: TradeInProcessService,
              private router: Router,
              private snackBarService: SnackbarService) { }

  ngOnInit() {
    this.tradeInProcessService.setCurrentStep(0);
  }

  onButtonClicked(event) {
      this.tradeInProcessService.setMaterial(event.value);
  }

  onNextClicked() {
    if (this.tradeInProcessService.hasMaterial()) {
      this.router.navigate(['/trade-in/piece']);
    } else {
        this.snackBarService.show('Please choose your jewellery material type.');
    }
  }

  onBackClicked() {
    this.router.navigate(['/trade-in/type']);
  }

}
