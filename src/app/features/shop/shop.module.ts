import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {CommonModule} from '@angular/common';
import {AllProductsResolver} from './all-products.resolver';
import {ShopListComponent} from './shop-list/shop-list.component';
import {ShopItemComponent} from './shop-list/shop-item/shop-item.component';
import {ShopSearchComponent} from './shop-search/shop-search.component';
import {ShopDetailComponent} from './shop-detail/shop-detail.component';
import {ShopComponent} from './shop.component';
import {ProductResolver} from './product.resolver';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        ShopListComponent,
        ShopItemComponent,
        ShopSearchComponent,
        ShopDetailComponent,
        ShopComponent,
    ],
    providers: [
        AllProductsResolver,
        ProductResolver
    ]
})

export class ShopModule {
}
