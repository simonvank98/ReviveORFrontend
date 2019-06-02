import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductModel} from '../../../../shared/services/product/product.model';
import {NgForm} from '@angular/forms';
import {ModalService} from '../../../../shared/services/modal-service/modal.service';
import {ProductService} from '../../../../shared/services/product/product.service';
import {SnackbarService} from '../../../../shared/services/snackbar/snackbar.service';

@Component({
    selector: 'app-admin-products-edit',
    templateUrl: './admin-product-edit.component.html',
    styleUrls: ['./admin-product-edit.component.scss']
})
export class AdminProductEditComponent implements OnInit {
    product: ProductModel;
    @ViewChild('f') form: NgForm;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private productService: ProductService,
                private snackbarService: SnackbarService,
                private modalService: ModalService) {
    }

    ngOnInit() {
        this.product = this.route.snapshot.data['product'];
        // this.product.category = this.route.snapshot.data['productCategory'];
    }

    onSave() {
        if (this.form.valid) {
            this.modalService.confirm('Are you sure?').subscribe((confirmed) => {
                if (confirmed) {
                    this.productService.editProduct(this.product).subscribe((res) => {
                        this.router.navigate(['/admin/products']);
                        this.snackbarService.show('Your changes have successfully been saved!');
                    }, (err) => {
                        this.snackbarService.show('Something went wrong while saving your changes');
                    });
                }
            });
        } else {
            this.snackbarService.show('Please fill out all required fields');
        }
    }

    onDelete() {

    }

}
