import {Component, OnInit} from '@angular/core';
import { TradeInProcessService } from '../../shared/services/trade-in-process/trade-in-process.service';

@Component({
  selector: 'app-trade-in-request-page',
  templateUrl: './trade-in-request-page.component.html',
  styleUrls: ['./trade-in-request-page.component.scss']
})
export class TradeInRequestPageComponent implements OnInit {

  constructor(public tradeInProcessService: TradeInProcessService) { }

  ngOnInit() {
  }

}
