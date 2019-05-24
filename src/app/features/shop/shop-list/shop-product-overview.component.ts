import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../../shared/services/product/product.model';
import {ProductService} from '../../../shared/services/product/product.service';
import {ActivatedRoute} from '@angular/router';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-product-overview.component.html',
  styleUrls: ['./shop-product-overview.component.scss']
})
export class ShopProductOverviewComponent implements OnInit {
    products: ProductModel[];
    filteredProducts: ProductModel[];

  constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.products = this.route.snapshot.data['products'];
        this.filteredProducts = this.products;
    }

    filterCategory(event) {
        event.value.forEach(category => {
            this.filteredProducts = this.products.filter(product => {
                console.log(category);
                return product.category.name.toString().toLocaleLowerCase() === category.toString().toLocaleLowerCase();
            });
        });
        console.log('last one', this.filteredProducts);
    }
}
