import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../../../../shared/services/product/product.model';

@Component({
    selector: 'app-shop-item',
    templateUrl: './shop-item.component.html',
    styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {
    @Input() product: ProductModel;

    constructor() {
    }

    ngOnInit() {
    }

}
