import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../../shared/services/product/product.model';
import {ProductService} from '../../../shared/services/product/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-product-overview.component.html',
  styleUrls: ['./shop-product-overview.component.scss']
})
export class ShopProductOverviewComponent implements OnInit {
    products: ProductModel[];

  constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.products = this.route.snapshot.data['products'];
        console.log(this.products);
    }
}
