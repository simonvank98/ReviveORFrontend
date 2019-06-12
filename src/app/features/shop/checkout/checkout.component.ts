import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from '../../../shared/services/auth/authentication.service';
import {DeliveryAddressComponent} from './delivery-address/delivery-address.component';
import {ShippingAddressModel} from '../../../shared/services/address/shippingAddressModel';
import {CheckoutService} from './checkout.service';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

    useAddressForm = false;

    @ViewChild(DeliveryAddressComponent)
    deliveryAddressForm: DeliveryAddressComponent;

    constructor(private authService: AuthenticationService, public checkoutService: CheckoutService) {
    }

    ngOnInit() {
        this.loadUserAddress();
    }


    onAddressOptionChanged(useNewAddress: boolean) {
        this.useAddressForm = useNewAddress;

        if (this.useAddressForm) {
            this.loadNewAddress();
        } else {
            this.loadUserAddress();
        }
    }

    onAddressFormChanged() {
        if (this.useAddressForm) {
            this.loadNewAddress();
        }
    }

    private loadUserAddress() {
        this.checkoutService.shippingAddress = this.authService.userInfo['address'];
    }

    private loadNewAddress() {
        this.checkoutService.shippingAddress = this.deliveryAddressForm.getAddressInfo();
    }

}
