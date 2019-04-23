import { Component, OnInit } from '@angular/core';
import { TradeInProcessService } from 'src/app/shared/services/trade-in-process/trade-in-process.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trade-in-request-jewelry-type',
  templateUrl: './trade-in-request-jewelry-type.component.html',
  styleUrls: ['./trade-in-request-jewelry-type.component.scss']
})
export class TradeInRequestJewelryTypeComponent implements OnInit {

  constructor(public tradeInProcessService: TradeInProcessService, private router: Router) { }

  ngOnInit() {
    const buttons = <NodeListOf<HTMLElement>>document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
      const button = <HTMLElement>buttons[i];
      if (this.tradeInProcessService.tradeInProcessContainer.jewelryType === button.innerText) {
        button.classList.add('selected');
      }
    }
  }

  onTypeClicked(event, type) {
    this.tradeInProcessService.setType(type);
    const buttons = <NodeListOf<HTMLElement>>document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
      const button = <HTMLElement>buttons[i];
      button.classList.remove('selected');
    }
    event.srcElement.classList.add('selected');
  }

  onNextClicked() {
    if (this.tradeInProcessService.tradeInProcessContainer.jewelryType.length > 0) {
      this.router.navigate(['/trade-in/material']);
    } else {
        console.log('ded');
    }
  }

  onBackClicked() {

  }
}
