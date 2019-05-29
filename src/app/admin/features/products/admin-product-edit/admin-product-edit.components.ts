import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductModel} from '../../../../shared/services/product/product.model';

@Component({
    selector: 'app-admin-products-edit',
    templateUrl: './admin-product-edit.component.html',
    styleUrls: ['./admin-product-edit.component.scss']
})
export class AdminProductEditComponent implements OnInit {
    product: ProductModel;
    constructor(private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.product = this.route.snapshot.data['product'];
        //this.product.category = this.route.snapshot.data['productCategory'];
    }

}
