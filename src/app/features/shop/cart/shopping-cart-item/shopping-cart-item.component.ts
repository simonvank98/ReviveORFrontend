import {Component, Input, OnInit} from '@angular/core';
import {CartItem} from '../cart-product.model';
import {ShoppingCartService} from '../cart.service';
import {SnackbarService} from '../../../../shared/services/snackbar/snackbar.service';

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

    constructor(private cartService: ShoppingCartService, private snackBarService: SnackbarService) {
    }

    ngOnInit() {
    }

    onRemoveCartItemButtonClicked(cartItem: CartItem) {
        this.cartService.removeItemFromCart(cartItem);
        this.snackBarService.show(`${cartItem.product.name} has been removed from your shopping cart.`);
    }
}
