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
    const buttons = <NodeListOf<HTMLElement>>document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
      const button = <HTMLElement>buttons[i];
      if (this.tradeInProcessService.tradeInProcessContainer.jewelryMaterial === button.innerText) {
        button.classList.add('selected');
      }
    }
  }

  onMaterialClicked(event, type) {
    this.tradeInProcessService.setMaterial(type);
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
    this.router.navigate(['/trade-in/type']);
  }

}
