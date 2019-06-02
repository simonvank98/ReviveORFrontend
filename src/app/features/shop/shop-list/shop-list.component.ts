import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../../shared/services/product/product.model';
import {ActivatedRoute} from '@angular/router';
import {LabelType, Options} from 'ng5-slider';

@Component({
    selector: 'app-shop-list',
    templateUrl: './shop-list.component.html',
    styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {
    products: ProductModel[];
    displayedProducts: ProductModel[];
    categoryFilter = ['rings', 'necklaces', 'earrings', 'bracelets'];
    materialFilter = ['gold', 'silver', 'other'];
    lowPrice = 0;
    highPrice = 300;
    rating = 1;
    sortSelect = 'newest';

    // slider settings
    value = 0;
    highValue = 300;
    priceOptions: Options = {
        floor: 0,
        ceil: 300,
        translate: (value: number, label: LabelType): string => {
            switch (label) {
                case LabelType.Low:
                    return 'Min price: €' + value;
                case LabelType.High:
                    return 'Max price: €' + value;
                default:
                    return '€' + value;
            }
        }
    };

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.products = this.route.snapshot.data['products'];
        this.displayedProducts = this.products;
        this.sortByNewest();
    }

    filterCategory(event) {
        this.categoryFilter = event.value;
        this.filter();
    }

    filterMaterial(event) {
        this.materialFilter = event.value;
        this.filter();
    }

    filterPrice(event) {
        this.lowPrice = event.value;
        this.highPrice = event.highValue;
        this.filter();
    }

    filterRating(event) {
        this.rating = event.rating;
        this.filter();
    }

    filter() {
        this.displayedProducts = this.products.filter(product => {
            return this.categoryFilter.includes(product.category.name.toLocaleLowerCase()) &&
                this.materialFilter.includes(product.material.toLocaleLowerCase()) &&
                product.price >= this.lowPrice && product.price <= this.highPrice &&
                +product.rating.name >= this.rating;
        });
    }

    sortByNewest() {
        this.displayedProducts.sort(function(a, b) {
            const date1 = new Date(a.updatedAt).getTime();
            const date2 = new Date(b.updatedAt).getTime();
            return date1 - date2;
        });
    }

    sortByOldest() {
        //
    }

    sortByHighestPrice() {
        // this.displayedProducts.sort()
    }
    
    sortByLowestPrice() {
        this.displayedProducts.sort(function(a, b) {return a.price - b.price; });
    }


}
