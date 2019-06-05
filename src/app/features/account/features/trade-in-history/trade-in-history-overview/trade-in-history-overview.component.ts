import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../../../shared/services/auth/authentication.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-trade-in-history-overview',
  templateUrl: './trade-in-history-overview.component.html',
  styleUrls: ['./trade-in-history-overview.component.scss']
})
export class TradeInHistoryOverviewComponent implements OnInit {
    models = [];
    headers = ['Status', 'Jewelry', 'Estimated credit', 'Request date', 'Last update'];
    attributes = ['status', 'jewelryName', 'estimatedCredit', 'createdAt', 'updatedAt'];
    formatters = [(attr) => attr, (attr) => attr, (attr) => attr, (createdAt) => new Date(createdAt).toLocaleDateString(),
        (updatedAt) => new Date(updatedAt).toLocaleDateString()];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.models = this.route.snapshot.data['requests'];
  }
}
