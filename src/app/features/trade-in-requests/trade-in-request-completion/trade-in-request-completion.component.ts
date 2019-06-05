import {Component, OnInit} from '@angular/core';
import {TradeInProcessService} from '../trade-in-process.service';

@Component({
  selector: 'app-trade-in-request-completion',
  templateUrl: './trade-in-request-completion.component.html',
  styleUrls: ['./trade-in-request-completion.component.scss']
})
export class TradeInRequestCompletionComponent implements OnInit {

  constructor(private tradeInProcessService: TradeInProcessService) { }

    ngOnInit() {
        this.tradeInProcessService.setCurrentStep(3);
    }

}
