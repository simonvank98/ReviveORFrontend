import {Injectable} from '@angular/core';
import {ShippingAddressModel} from '../../../shared/services/address/shippingAddressModel';

@Injectable({
    providedIn: 'root'
})
export class CheckoutService {

    shippingAddress: ShippingAddressModel = {
        firstname: '',
        lastname: '',
        address1: '',
        address2: '',
        country: '',
        zipcode: '',
        city: '',
        province: ''
    };



}
