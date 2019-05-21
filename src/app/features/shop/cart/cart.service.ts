import {Injectable, OnDestroy} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {CartItem} from './cart-product.model';
import {ProductModel} from '../../../shared/services/product/product.model';

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService implements OnDestroy {
    private storageKey = 'cartItems';

    public cartItemsSubject: Subject<CartItem[]> = new Subject();

    private cartValue: number;
    private cartItemsSubscription: Subscription;

    constructor() {
        this.cartItemsSubscription = this.cartItemsSubject.subscribe((cartItems) => {
            this.updateCartValue(cartItems);
        });
    }

    ngOnDestroy(): void {
        this.cartItemsSubscription.unsubscribe();
    }

    public loadCartItemsFromStorage() {
        this.cartItemsSubject.next(this.retrieveAllItemsFromStorage());
    }

    public addProductToCart(productToAdd: ProductModel, quantity = 1) {
        const cartItems = this.retrieveAllItemsFromStorage();
        let found = false;
        for (const cartItem of cartItems) {
            if (cartItem.product.id === productToAdd.id) {
                found = true;
                break;
            }
        }
        if (found) {
            throw new Error('Item already exists in cart');
        }
        cartItems.push({product: productToAdd, quantity: quantity});
        this.storeAllItems(cartItems);
        this.notifyObservers(cartItems);
    }

    public removeItemFromCart(cartItem: CartItem) {
        const cartItems = this.retrieveAllItemsFromStorage().filter(item => !(item.product.id === cartItem.product.id));
        this.storeAllItems(cartItems);
        this.notifyObservers(cartItems);
    }

    public setCartItemQuantity(cartItem: CartItem, quantity: number) {
        const cartItems = this.retrieveAllItemsFromStorage();
        for (const item of cartItems) {
            if (item.product.id === cartItem.product.id) {
                item.quantity = quantity;
                break;
            }
        }
        this.storeAllItems(cartItems);
        this.notifyObservers(cartItems);
    }


    public clearCart() {
        this.storeAllItems([]);
        this.notifyObservers([]);
    }

    public getCartValue() {
        return this.cartValue;
    }

    private notifyObservers(cartItems: CartItem[]) {
        this.cartItemsSubject.next(cartItems);
    }

    private retrieveAllItemsFromStorage(): CartItem[] {
        let cartItems = [];
        try {
            const cartItemsJSON = localStorage.getItem(this.storageKey);
            if (cartItemsJSON !== null) {
                cartItems = JSON.parse(cartItemsJSON);
            }
        } catch (e) {
            cartItems = [];
        }
        return cartItems;
    }

    private storeAllItems(cartItems: CartItem[]) {
        localStorage.setItem(this.storageKey, JSON.stringify(cartItems));
    }

    private updateCartValue(cartItems: CartItem[]) {
        this.cartValue = 0;
        for (const cartItem of cartItems) {
            this.cartValue += (cartItem.product.price * cartItem.quantity);
        }
    }
}
