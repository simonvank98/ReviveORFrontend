import {Component, OnInit} from '@angular/core';
import {AdminTradeInRequestService} from '../admin-trade-in-request.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-admin-trade-in-request-overview',
    templateUrl: './admin-trade-in-request-overview.component.html',
    styleUrls: ['./admin-trade-in-request-overview.component.scss']
})
export class AdminTradeInRequestOverviewComponent implements OnInit {
    models = [];
    headers = ['Request #', 'Status', 'Jewelry', 'Estimated credit', 'Request date'];
    attributes = ['id', 'status', 'jewelryName', 'estimatedCredit', 'createdAt'];

    constructor(private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.models = this.route.snapshot.data['requests'];
    }

    toEditRequest(event) {
        this.router.navigate(['/admin/trade-in/edit', +event.model.id]);
    }
}
