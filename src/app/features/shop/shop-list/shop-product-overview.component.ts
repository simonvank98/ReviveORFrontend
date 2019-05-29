import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../../shared/services/product/product.model';
import {ActivatedRoute} from '@angular/router';

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
      this.filteredProducts = [];
        event.value.forEach(category => {
                this.products.filter(product => {
                if (product.category.name.toString().toLocaleLowerCase() === category.toString().toLocaleLowerCase()) {
                    this.filteredProducts.push(product);
                }
            });
        });
    }

    filterMaterial(event) {
      this.filteredProducts = [];
        event.value.forEach(material => {
            this.products.filter(product => {
                if (product.material.toLocaleLowerCase() === material.toString().toLocaleLowerCase()) {
                    this.filteredProducts.push(product);
                }
            });
        });
    }
}
