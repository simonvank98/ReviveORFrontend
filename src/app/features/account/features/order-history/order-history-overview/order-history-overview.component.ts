import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {InvoiceModel} from '../../../../../shared/services/invoices/invoice.model';

@Component({
  selector: 'app-order-history-overview',
  templateUrl: './order-history-overview.component.html',
  styleUrls: ['./order-history-overview.component.scss']
})
export class OrderHistoryOverviewComponent implements OnInit {
    orders: InvoiceModel[];
    headers = ['Order id', 'Order total', 'Order date'];
    attributes = ['orCode', 'totalAmount', 'createdAt'];
    formatters = [(attr) => attr, (attr) => attr, (createdAt) => new Date(createdAt).toLocaleDateString(),];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.orders = this.route.snapshot.data['orders'];
  }
}
