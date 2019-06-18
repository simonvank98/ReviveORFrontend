import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order-history-overview',
  templateUrl: './order-history-overview.component.html',
  styleUrls: ['./order-history-overview.component.scss']
})
export class OrderHistoryOverviewComponent implements OnInit {
    models = [];
    headers = ['Status', 'Jewelry', 'Estimated credit', 'Request date', 'Last update'];
    attributes = ['status', 'jewelryName', 'estimatedCredit', 'createdAt', 'updatedAt'];
    formatters = [(attr) => attr, (attr) => attr, (attr) => attr, (createdAt) => new Date(createdAt).toLocaleDateString(),
        (updatedAt) => new Date(updatedAt).toLocaleDateString()];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      // this.models = this.route.snapshot.data['requests'];
  }

}
