import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TradeInRequestModel} from '../trade-in-request.model';

@Component({
  selector: 'app-admin-trade-in-request-edit',
  templateUrl: './admin-trade-in-request-edit.component.html',
  styleUrls: ['./admin-trade-in-request-edit.component.scss']
})
export class AdminTradeInRequestEditComponent implements OnInit {
  model: TradeInRequestModel;
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.model = this.route.snapshot.data['request'];
    console.log(this.model);
  }

  back() {
    this.router.navigate(['/admin/trade-in']);
  }
}
