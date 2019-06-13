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
    categories = ['rings', 'necklaces', 'earrings', 'bracelets'];
    materials = ['gold', 'silver', 'other'];
    lowPrice = 0;
    highPrice = 0;
    rating = 1;
    sortSelect = 'newest';

    // slider settings
    private value = 0;
    private highValue = 0;
    public optionsLoaded = false;
    public priceOptions: Options = {
        floor: 0,
        ceil: 300,
        translate: (value: number, label: LabelType): string => {
            return '€' + value;
        }
    };

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.products = this.route.snapshot.data['products'];
        this.displayedProducts = this.products;
        this.priceOptions.ceil = this.getHighestPrice();
        this.highValue = this.priceOptions.ceil;
        this.highPrice = this.priceOptions.ceil;
        this.optionsLoaded = true;
        this.sortByNewest();
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
            return this.categories.includes(product.category.name.toLocaleLowerCase()) &&
                this.materials.includes(product.material.toLocaleLowerCase()) &&
                product.price >= this.lowPrice && product.price <= this.highPrice &&
                +product.rating.name >= this.rating;
        });
    }

    sortProducts(event) {
        switch (event.value) {
            case 'newest':
                this.sortByNewest();
                break;
            case 'oldest':
                this.sortByOldest();
                break;
            case 'highestPrice':
                this.sortByHighestPrice();
                break;
            case 'lowestPrice':
                this.sortByLowestPrice();
                break;
        }
    }

    sortByNewest() {
        this.displayedProducts.sort(function(a, b) {
            const date1 = new Date(a.createdAt).getTime();
            const date2 = new Date(b.createdAt).getTime();
            return date2 - date1;
        });
    }

    sortByOldest() {
        this.sortByNewest();
        this.displayedProducts.reverse();
    }

    sortByHighestPrice() {
        this.displayedProducts.sort(function(a, b) {return b.price - a.price; });
    }

    sortByLowestPrice() {
        this.displayedProducts.sort(function(a, b) {return a.price - b.price; });
    }

    private getHighestPrice() {
        if (this.products.length === 0) {
            return 0;
        }
        return Math.max.apply(Math, this.displayedProducts.map(function(o) { return o.price; }));
    }


}
