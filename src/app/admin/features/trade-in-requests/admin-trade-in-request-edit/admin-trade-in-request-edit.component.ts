import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TradeInRequestModel} from '../../../../shared/services/trade-in/models/trade-in-request.model';
import {ORProductService} from '../../../../shared/services/or-product/or-product.service';
import {ORProduct} from '../../../../shared/services/or-product/or-product.model';
import {NgForm} from '@angular/forms';
import {TradeInRequestService} from '../../../../shared/services/trade-in/trade-in-request.service';
import {SnackbarService} from '../../../../shared/services/snackbar/snackbar.service';
import {ModalService} from '../../../../shared/services/modal-service/modal.service';
import {CreditIndicationService} from '../../../../shared/services/credit-indication/credit-indication.service';

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
    buttonText = '';
    displayedImages: string[];
    disabled = true;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private orProductService: ORProductService,
                private adminTradeInRequestService: TradeInRequestService,
                private snackbarService: SnackbarService,
                private modalService: ModalService,
                public  creditIndicationService: CreditIndicationService) {
    }

    ngOnInit() {
        this.model = this.route.snapshot.data['request'];
        this.model.messageToCustomer = '';
        this.displayedImages = this.model.images.map(image => image.url);
        this.orProductService.getAll().subscribe((data: ORProduct[]) => {
            this.orProducts = data;
            this.orProducts.forEach(orProduct => {
                if (orProduct.name === this.model.jewelryName) {
                    this.properties = orProduct.properties;
                }
            });
        });
        this.formatButtonsText();
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
            this.modalService.confirm('Are you sure you wish to approve this trade-in request for the next phase? This action can not be undone.').subscribe((confirmed) => {
                if (confirmed) {
                    if (this.model.status === 'Approved for shipping') {
                        this.model.status = 'Complete';
                    }
                    if (this.model.status === 'Awaiting shipping approval') {
                        this.model.status = 'Approved for shipping';
                    }

                    this.adminTradeInRequestService.put(this.model).subscribe((res) => {
                        this.router.navigate(['/admin/trade-in']);
                        if (this.model.status === 'Approved for shipping') {
                            this.snackbarService.show('Request approved');
                        }
                        if (this.model.status === 'Complete') {
                            this.snackbarService.show('Trade-in completed');
                        }
                    }, (err) => {
                        this.snackbarService.show('Something went wrong while approving the request');
                    });
                }
            });
        } else {
            this.snackbarService.show('Please fill out all required fields');
        }
    }

    onDeny() {
        this.modalService.confirm('Are you sure you wish to cancel this trade-in request? This action can not be undone.').subscribe((confirmed) => {
            if (confirmed) {
                this.model.status = 'Denied';
                this.adminTradeInRequestService.put(this.model).subscribe((res) => {
                    this.router.navigate(['/admin/trade-in']);
                    this.snackbarService.show('Request denied');
                });
            }
        });
    }

    private formatButtonsText() {
        if (this.model.status === 'Awaiting shipping approval') {
            this.buttonText = 'Approve for shipping';
            this.disabled = false;
        }
        if (this.model.status === 'Approved for shipping') {
            this.buttonText = 'Complete trade-in' ;
            this.disabled = false;
        }
    }

    recalculate() {
        const selectedProduct = this.orProducts.find((product) => {
            return product.name === this.model.jewelryName;
        });
        this.creditIndicationService.getExampleIndication(
            {jewelryCondition: this.model.jewelryCondition,
                jewelryType: 'rings', orProductId: selectedProduct.id, selectedProperty: this.model.selectedProperty ? this.model.selectedProperty : 's'})
            .subscribe( data => {
                this.model.estimatedCredit = data.indication;
            });
    }
}
