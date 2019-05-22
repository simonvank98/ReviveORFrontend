import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TradeInRequestModel} from '../models/trade-in-request.model';
import {ORProductService} from '../../../../shared/services/or-product/or-product.service';
import {ORProduct} from '../../../../shared/services/or-product/or-product.model';

@Component({
    selector: 'app-admin-trade-in-request-edit',
    templateUrl: './admin-trade-in-request-edit.component.html',
    styleUrls: ['./admin-trade-in-request-edit.component.scss']
})
export class AdminTradeInRequestEditComponent implements OnInit {
    model: TradeInRequestModel;
    orProducts: ORProduct[];
    properties: any[];
    constructor(private route: ActivatedRoute,
                private router: Router,
                private orProductService: ORProductService) { }

    ngOnInit() {
        this.model = this.route.snapshot.data['request'];
        this.orProductService.getAll().subscribe((data: ORProduct[]) => {
            this.orProducts = data;
            console.log(this.orProducts);
            this.orProducts.forEach(orProduct => {
                if (orProduct.name === this.model.jewelryName) {
                    this.properties = orProduct.properties;
                    console.log(this.properties);
                }
            });
        });
    }

    back() {
        this.router.navigate(['/admin/trade-in']);
    }

    onORProductSelected(event) {
        this.orProducts.forEach(orProduct => {
            if (orProduct.name === event.value) {
                this.properties = orProduct.properties;
            }
        });
    }
}
