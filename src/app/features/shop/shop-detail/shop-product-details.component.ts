import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../../shared/services/product/product.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-product-details.component.html',
  styleUrls: ['./shop-product-details.component.scss']
})
export class ShopProductDetailsComponent implements OnInit {

  product: ProductModel;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params
          .subscribe(
              () => {
                  this.product = this.route.snapshot.data.product;
              }
          );
      console.log(this.product);
  }
}
