import {Component, OnInit} from '@angular/core';
import {TradeInProcessService} from './trade-in-process.service';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from 'src/app/app-routing-animations';

@Component({
  selector: 'app-trade-in-request-page',
  templateUrl: './trade-in-request-page.component.html',
  styleUrls: ['./trade-in-request-page.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class TradeInRequestPageComponent implements OnInit {

  constructor(public tradeInProcessService: TradeInProcessService) { }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
