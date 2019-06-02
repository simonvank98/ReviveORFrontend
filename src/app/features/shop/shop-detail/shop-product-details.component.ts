import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../../shared/services/product/product.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ShoppingCartService} from '../cart/cart.service';
import {ModalService} from '../../../shared/services/modal-service/modal.service';
import {CurrencyPipe} from '@angular/common';
import {SnackbarService} from '../../../shared/services/snackbar/snackbar.service';

@Component({
    selector: 'app-shop-detail',
    templateUrl: './shop-product-details.component.html',
    styleUrls: ['./shop-product-details.component.scss'],
})
export class ShopProductDetailsComponent implements OnInit {

    product: ProductModel;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private currencyPipe: CurrencyPipe,
                private cartService: ShoppingCartService,
                private snackBarService: SnackbarService,
                private modalService: ModalService) {
    }

    ngOnInit() {
        this.product = this.route.snapshot.data.product;
        console.log(this.product.createdAt);
    }


    onAddToShoppingCartButtonClicked() {
        try {
            this.cartService.addProductToCart(this.product);
            this.showAddedToCartDialog();
        } catch (e) {
            this.snackBarService.show('This item is already in your shopping cart.');
        }
    }

    private showAddedToCartDialog() {
        const dialog = this.modalService.createDialog('Item has been added to your cart',
            `${this.product.name} has been added to your shopping cart.

            Your shopping cart total: ${this.currencyPipe.transform(this.cartService.getCartValue(), '€')}`);

        dialog.addButton('Continue shopping', () => {
        }).buttonColor = 'primary';
        dialog.addButton('View shopping cart', () => {
            this.router.navigate(['/shop/cart']);
        });

        this.modalService.showDialog(dialog);
    }
}
