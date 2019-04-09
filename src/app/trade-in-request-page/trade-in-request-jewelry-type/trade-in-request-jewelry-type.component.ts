import { Component, OnInit } from '@angular/core';
import { TradeInProcessService } from 'src/app/shared/services/trade-in-process.service';

@Component({
  selector: 'app-trade-in-request-jewelry-type',
  templateUrl: './trade-in-request-jewelry-type.component.html',
  styleUrls: ['./trade-in-request-jewelry-type.component.scss']
})
export class TradeInRequestJewelryTypeComponent implements OnInit {

  constructor(public tradeInProcessService: TradeInProcessService) { }

  ngOnInit() {
  }

  onTypeClicked(type) {
    this.tradeInProcessService.setType(type);
  }
}
