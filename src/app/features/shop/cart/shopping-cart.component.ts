import {Component, Input, OnDestroy, OnInit} from '@angular/core';
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
    shippingCost = 5;
    @Input()
    addButton = true;

    private cartSubscription: Subscription;

    constructor(private cartService: ShoppingCartService) {
    }

    ngOnInit() {
        this.cartSubscription = this.cartService.cartItemsSubject.subscribe((products) => {
            this.loadCartItems(products);
            this.cartSubTotal = this.cartService.getCartValue();
            this.cartTotal = this.cartSubTotal + this.shippingCost;
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
