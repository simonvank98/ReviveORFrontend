import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-delivery-address',
    templateUrl: './delivery-address.component.html',
    styleUrls: ['./delivery-address.component.scss']
})
export class DeliveryAddressComponent implements OnInit, OnDestroy {
    addressForm = this.fb.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        address1: ['', Validators.required],
        address2: [''],
        city: ['', Validators.required],
        zipcode: ['', Validators.required],
        province: ['', Validators.required],
        country: ['', Validators.required]
    });

    @Output()
    changes = new EventEmitter();

    formSubscription: Subscription;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.formSubscription = this.addressForm.valueChanges.subscribe(() => this.changes.emit());
    }

    getAddressInfo() {
        return this.addressForm.getRawValue();
    }

    ngOnDestroy(): void {
        this.formSubscription.unsubscribe();
    }
}
