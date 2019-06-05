import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingCartService} from './cart.service';
import {CartItem} from './cart-product.model';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

    cartItems: CartItem[];
    cartItemsCount = 0;

    cartSubTotal: number;
    cartTotal: number;

    private cartSubscription: Subscription;

    constructor(private cartService: ShoppingCartService) {
    }

    ngOnInit() {
        this.cartSubscription = this.cartService.cartItemsSubject.subscribe((products) => {
            this.loadCartItems(products);
            this.cartTotal = this.cartService.getCartValue();
            this.cartSubTotal = this.cartTotal;
        });
        this.cartService.loadCartItemsFromStorage();
    }

    ngOnDestroy() {
        this.cartSubscription.unsubscribe();
    }

    private loadCartItems(cartProducts: CartItem[]) {
        this.cartItems = cartProducts;
        this.cartItemsCount = this.cartItems.length;
    }
}
