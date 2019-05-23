import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TradeInRequestModel} from '../models/trade-in-request.model';
import {ORProductService} from '../../../../shared/services/or-product/or-product.service';
import {ORProduct} from '../../../../shared/services/or-product/or-product.model';
import {NgForm} from '@angular/forms';
import {AdminTradeInRequestService} from '../admin-trade-in-request.service';
import {SnackbarService} from '../../../../shared/services/snackbar/snackbar.service';
import {ModalService} from '../../../../shared/services/modal-service/modal.service';

@Component({
    selector: 'app-admin-trade-in-request-edit',
    templateUrl: './admin-trade-in-request-edit.component.html',
    styleUrls: ['./admin-trade-in-request-edit.component.scss']
})
export class AdminTradeInRequestEditComponent implements OnInit {

    model: TradeInRequestModel;
    orProducts: ORProduct[];
    properties: any[];
    @ViewChild('f') form: NgForm;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private orProductService: ORProductService,
                private adminTradeInRequestService: AdminTradeInRequestService,
                private snackbarService: SnackbarService,
                private modalService: ModalService) {
    }

    ngOnInit() {
        this.model = this.route.snapshot.data['request'];
        this.orProductService.getAll().subscribe((data: ORProduct[]) => {
            this.orProducts = data;
            this.orProducts.forEach(orProduct => {
                if (orProduct.name === this.model.jewelryName) {
                    this.properties = orProduct.properties;
                }
            });
        });
    }

    back() {
        this.router.navigate(['/admin/trade-in']);
    }

    onORProductSelected(event) {
        this.orProducts.forEach(orProduct => {
            if (orProduct.name === event.value) {
                this.properties = orProduct.properties;
            }
        });
    }

    onSubmit() {
        if (this.form.valid) {
            this.modalService.confirm('Are you sure?').subscribe((confirmed) => {
                if (confirmed) {
                    if (this.model.status === 'New') {
                        this.model.status = 'Awaiting shipping approval';
                        console.log(this.model.status);
                    }
                    console.log(this.model);
                    this.adminTradeInRequestService.put(this.model).subscribe(() => {
                        this.router.navigate(['/admin/trade-in']);
                        this.snackbarService.show('Request approved');
                    }, (err) => {
                        this.snackbarService.show('Something went wrong while approving the request');
                    });
                }
            });
        } else {
            this.snackbarService.show('Please fill out all required fields');
        }
    }
}
