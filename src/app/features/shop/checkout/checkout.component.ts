import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from '../../../shared/services/auth/authentication.service';
import {DeliveryAddressComponent} from './delivery-address/delivery-address.component';
import {ShippingAddressModel} from '../../../shared/services/address/shippingAddressModel';
import {CheckoutService} from './checkout.service';
import {SnackbarService} from '../../../shared/services/snackbar/snackbar.service';
import {Router} from '@angular/router';
import {ShoppingCartService} from '../cart/cart.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {


    @ViewChild(DeliveryAddressComponent)
    deliveryAddressForm: DeliveryAddressComponent;
    private cartSubscription: Subscription;

    constructor(public authService: AuthenticationService,
                private router: Router,
                private cartService: ShoppingCartService,
                private snackBarService: SnackbarService,
                public checkoutService: CheckoutService) {
    }

    ngOnInit() {
        this.cartSubscription = this.cartService.cartItemsSubject.subscribe((products) => {
            if (products.length === 0) {
                this.router.navigate(['/shop', 'cart']);
            }
        });
        this.loadUserAddress();
    }


    ngOnDestroy(): void {
        this.cartSubscription.unsubscribe();
    }

    onAddressOptionChanged(useNewAddress: boolean) {
        this.checkoutService.useAddressForm = useNewAddress;

        if (this.checkoutService.useAddressForm) {
            this.loadNewAddress();
        } else {
            this.loadUserAddress();
        }
    }

    onAddressFormChanged() {
        if (this.checkoutService.useAddressForm) {
            this.loadNewAddress();
        }
    }

    private loadUserAddress() {
        this.checkoutService.shippingAddress = this.authService.userInfo['address'];
    }

    private loadNewAddress() {
        this.checkoutService.shippingAddress = this.deliveryAddressForm.getAddressInfo();
    }

    onCheckoutButtonClicked() {
        this.checkoutService.getCheckoutUrl().subscribe(
            (response) => {
                console.log('checkout response: ', response);
                window.open(response.checkoutUrl, '_self');
            },
            (err) => {
                this.snackBarService.show('Something went wrong while attempting to go to the payment area.');
            }
        );
    }
}
