import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-admin-products-overview',
    templateUrl: './admin-products-overview.component.html',
    styleUrls: ['./admin-products-overview.component.scss']
})
export class AdminProductsOverviewComponent implements OnInit {
    products = [];
    headers = ['Product no.', 'Name', 'Category', 'Price'];
    attributes = ['id', 'name', 'category', 'price'];
    formatters = [(attr) => attr, (attr) => attr, (category) => category.name, (attr) => attr];

    constructor(private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.products = this.route.snapshot.data['products'];
    }

    toEditRequest(event) {
        this.router.navigate(['/admin/products/edit', +event.model.id]);
    }
}
