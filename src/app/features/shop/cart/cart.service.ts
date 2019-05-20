import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {CartItem} from './cart-product.model';
import {ProductModel} from '../../../shared/services/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private storageKey = 'cartItems';

  public cartItems: Subject<CartItem[]> = new Subject();

  loadCartItems() {
    this.cartItems.next(this.retrieveAll());
  }

  addProductToCart(productToAdd: ProductModel, quantity = 1) {
    const cartItems = this.retrieveAll();
    let found = false;
    for (const cartItem of cartItems) {
      if (cartItem.product.id === productToAdd.id) {
        found = true;
        cartItem.quantity += quantity;
        break;
      }
    }
    if (!found) {
      cartItems.push({product: productToAdd, quantity: quantity});
    }
    this.storeAll(cartItems);
  }

  removeItemFromCart(cartItem: CartItem) {
    const cartItems = this.retrieveAll().filter(item => !(item.product.id === cartItem.product.id));
    this.storeAll(cartItems);
  }

  setCartItemQuantity(cartItem: CartItem, quantity: number) {
    const cartItems = this.retrieveAll();
    for (const item of cartItems) {
      if (item.product.id === cartItem.product.id) {
        item.quantity = quantity;
        break;
      }
    }
    this.storeAll(cartItems);
  }

  private retrieveAll(): CartItem[] {
    let cartItems = JSON.parse(localStorage.getItem(this.storageKey));
    if (cartItems === null) {
      cartItems = [];
    }
    return cartItems;
  }


  private storeAll(products: CartItem[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(products));
    this.cartItems.next(products);
  }

  clearCart() {
    this.storeAll([]);
  }
}
