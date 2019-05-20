import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {CommonModule} from '@angular/common';
import {AllProductsResolver} from './all-products.resolver';
import {ShopProductOverviewComponent} from './shop-list/shop-product-overview.component';
import {ShopItemComponent} from './shop-list/shop-item/shop-item.component';
import {ShopSearchComponent} from './shop-search/shop-search.component';
import {ShopProductDetailsComponent} from './shop-detail/shop-product-details.component';
import {ShopComponent} from './shop.component';
import {ProductResolver} from './product.resolver';
import {ShoppingCartComponent} from './cart/shopping-cart.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        ShopProductOverviewComponent,
        ShopItemComponent,
        ShopSearchComponent,
        ShopProductDetailsComponent,
        ShopComponent,
        ShoppingCartComponent,
    ],
    providers: [
        AllProductsResolver,
        ProductResolver
    ]
})

export class ShopModule {
}
