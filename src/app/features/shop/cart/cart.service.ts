import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subject, Subscription} from 'rxjs';
import {CartItem} from './cart-product.model';
import {ProductModel} from '../../../shared/services/product/product.model';
import {ProductService} from '../../../shared/services/product/product.service';

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService implements OnDestroy {
    private storageKey = 'cartItems';

    public cartItemsSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject([]);

    private cartValue: number;
    private cartItemsSubscription: Subscription;

    constructor(private productService: ProductService) {
        this.cartItemsSubscription = this.cartItemsSubject.subscribe((cartItems) => {
            this.updateCartValue(cartItems);
        });
        this.loadCartItemsFromStorage();
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
            if (cartItem.productId === productToAdd.id) {
                found = true;
                break;
            }
        }
        if (found) {
            throw new Error('Item already exists in cart');
        }
        cartItems.push({productId: productToAdd.id, quantity: quantity, product: productToAdd});
        this.storeAllItems(cartItems);
        this.notifyObservers(cartItems);
    }

    public removeItemFromCart(cartItem: CartItem) {
        const cartItems = this.retrieveAllItemsFromStorage().filter(item => !(item.productId === cartItem.productId));
        this.storeAllItems(cartItems);
        this.notifyObservers(cartItems);
    }

    public setCartItemQuantity(cartItem: CartItem, quantity: number) {
        const cartItems = this.retrieveAllItemsFromStorage();
        for (const item of cartItems) {
            if (item.productId === cartItem.productId) {
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
            this.productService.getProduct(cartItem.productId).subscribe((product) => {
                this.cartValue += (product.price * cartItem.quantity);
                cartItem.product = product;
            }, (error) => {
                this.removeItemFromCart(cartItem);
            });
        }
    }
}
