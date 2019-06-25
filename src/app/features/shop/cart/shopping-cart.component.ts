import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ShoppingCartService} from './cart.service';
import {CartItem} from './cart-product.model';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

    shippingCost = 5;

    cartItems: CartItem[];
    cartItemsCount = 0;
    cartSubTotal: number;
    cartTotal: number;

    @Input()
    addButton = true;

    private cartItemsSubscription: Subscription;
    private cartValueSubscription: Subscription;

    constructor(private cartService: ShoppingCartService) {
    }

    ngOnInit() {
        this.cartValueSubscription = this.cartService.cartValueSubject.subscribe((value) => {
            this.loadCartValue();
        });
        this.cartItemsSubscription = this.cartService.cartItemsSubject.subscribe((products) => {
            this.loadCartItems(products);
            this.loadCartValue();
            console.log('cart in shopping Value', this.cartSubTotal);
        });
    }

    ngOnDestroy() {
        this.cartItemsSubscription.unsubscribe();
        this.cartValueSubscription.unsubscribe();
    }

    private loadCartItems(cartProducts: CartItem[]) {
        this.cartItems = cartProducts;
        this.cartItemsCount = this.cartItems.length;
    }

    private loadCartValue() {
        this.cartSubTotal = this.cartService.getCartValue();
        this.cartTotal = this.cartSubTotal + this.shippingCost;
    }
}
