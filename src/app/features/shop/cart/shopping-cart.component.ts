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
    this.cartSubscription = this.cartService.cartItems.subscribe((products) => {
      this.loadCartItems(products);
    });
    this.cartService.loadCartItems();
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }

  onRemoveCartItemButtonClicked(cartItem: CartItem) {
    this.cartService.removeItemFromCart(cartItem);
  }

  quantityChanged(quantity, cartItem: CartItem) {
    quantity = Math.ceil(quantity);
    if (quantity === 0) {
      this.cartService.removeItemFromCart(cartItem);
    } else {
      this.cartService.setCartItemQuantity(cartItem, quantity);
    }
  }

  private loadCartItems(cartProducts: CartItem[]) {
    this.cartItems = cartProducts;
    this.cartItemsCount = this.cartItems.length;
    this.calculateTotals();
  }

  private calculateTotals() {
    this.cartSubTotal = 0;
    for (const cartItem of this.cartItems) {
      this.cartSubTotal += (cartItem.product.price * cartItem.quantity);
    }
    this.cartTotal = this.cartSubTotal;
  }
}
