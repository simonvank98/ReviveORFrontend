import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../../shared/services/product/product.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss']
})
export class ShopDetailComponent implements OnInit {

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
