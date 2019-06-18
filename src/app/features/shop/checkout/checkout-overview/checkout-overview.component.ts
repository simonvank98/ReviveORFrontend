import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {CartItem} from '../../cart/cart-product.model';
import {ShoppingCartService} from '../../cart/cart.service';

@Component({
    selector: 'app-checkout-overview',
    templateUrl: './checkout-overview.component.html',
    styleUrls: ['./checkout-overview.component.scss']
})
export class CheckoutOverviewComponent implements OnInit, OnDestroy {

    shippingCost = 5;

    cartItems: CartItem[];
    cartItemsCount = 0;
    cartSubTotal: number;
    cartTotal: number;

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
    }

    ngOnDestroy() {
        this.cartSubscription.unsubscribe();
    }

    private loadCartItems(cartProducts: CartItem[]) {
        this.cartItems = cartProducts;
        this.cartItemsCount = this.cartItems.length;
    }
}
