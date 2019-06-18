import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {CommonModule, CurrencyPipe} from '@angular/common';
import {AllProductsResolver} from '../../shared/services/product/all-products.resolver';
import {ShopListComponent} from './shop-list/shop-list.component';
import {ShopItemComponent} from './shop-list/shop-item/shop-item.component';
import {ShopProductDetailsComponent} from './shop-detail/shop-product-details.component';
import {ShopComponent} from './shop.component';
import {ProductResolver} from '../../shared/services/product/product.resolver';
import {ShoppingCartComponent} from './cart/shopping-cart.component';
import {ShoppingCartItemComponent} from './cart/shopping-cart-item/shopping-cart-item.component';
import {AvailableProductsResolver} from './available-products.resolver';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
    ],
    declarations: [
        ShopListComponent,
        ShopItemComponent,
        ShopProductDetailsComponent,
        ShopComponent,
        ShoppingCartComponent,
        ShoppingCartItemComponent,
    ],
    providers: [
        AllProductsResolver,
        AvailableProductsResolver,
        ProductResolver,
        CurrencyPipe
    ]
})

export class ShopModule {
}
