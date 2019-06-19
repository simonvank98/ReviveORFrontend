import {Component, Input, OnInit} from '@angular/core';
import {CartItem} from '../cart-product.model';
import {ShoppingCartService} from '../cart.service';
import {SnackbarService} from '../../../../shared/services/snackbar/snackbar.service';
import {ProductModel} from '../../../../shared/services/product/product.model';
import {ProductService} from '../../../../shared/services/product/product.service';

@Component({
    selector: 'app-shopping-cart-item',
    templateUrl: './shopping-cart-item.component.html',
    styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent implements OnInit {

    @Input()
    cartItem: CartItem;
    @Input()
    addButton = true;
    product: ProductModel;

    constructor(private cartService: ShoppingCartService, private snackBarService: SnackbarService) {
    }

    ngOnInit() {
        this.product = this.cartItem.product;
    }


    onRemoveCartItemButtonClicked(cartItem: CartItem) {
        this.cartService.removeItemFromCart(cartItem);
        this.snackBarService.show(`${this.product.name} has been removed from your shopping cart.`);
    }
}
