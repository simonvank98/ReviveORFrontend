import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './features/core/home/home.component';
import {ShopComponent} from './features/shop/shop.component';
import {AccountPageComponent} from './features/accounts/account-page.component';
import {ErrorPageComponent} from './shared/components/error-page/error-page.component';
import {StoryPageComponent} from './features/stories/story-page.component';
import {TradeInRequestPageComponent} from './features/trade-in-requests/trade-in-request-page.component';
import { TradeInRequestJewelryTypeComponent } from './features/trade-in-requests/trade-in-request-jewelry-type/trade-in-request-jewelry-type.component';
import { TradeInRequestJewelryMaterialComponent } from './features/trade-in-requests/trade-in-request-jewelry-material/trade-in-request-jewelry-material.component';
import {AdminComponent} from './admin/admin.component';
import {AdminProductsOverviewComponent} from './admin/features/products/admin-products-overview/admin-products-overview.component';
import {AdminStoriesOverviewComponent} from './admin/features/stories/admin-stories-overview/admin-stories-overview.component';
import {AdminTradeInRequestOverviewComponent} from './admin/features/trade-in-requests/admin-trade-in-request-overview/admin-trade-in-request-overview.component';
import {AdminCreditIndicationsOverviewComponent} from './admin/features/credit-indications/admin-credit-indications-overview/admin-credit-indications-overview.component';
import {AdminPermissionsOverviewComponent} from './admin/features/permissions/admin-permissions-overview/admin-permissions-overview.component';
import {AllTradeInRequestResolver} from './admin/features/trade-in-requests/resolvers/all-trade-in-request.resolver';
import {AdminTradeInRequestEditComponent} from './admin/features/trade-in-requests/admin-trade-in-request-edit/admin-trade-in-request-edit.component';
import {TradeInRequestResolver} from './admin/features/trade-in-requests/resolvers/trade-in-request.resolver';
import { TradeInRequestJewelrySelectionComponent } from './features/trade-in-requests/trade-in-request-jewelry-selection/trade-in-request-jewelry-selection.component';
import {TradeInRequestFinalizationComponent} from './features/trade-in-requests/trade-in-request-finalization/trade-in-request-finalization.component';
import { TradeInRequestJewelryConditionComponent } from './features/trade-in-requests/trade-in-request-jewelry-condition/trade-in-request-jewelry-condition.component';
import { TradeInRequestCreditIndicationComponent } from './features/trade-in-requests/trade-in-request-credit-indication/trade-in-request-credit-indication.component';
import { TradeInRequestOverviewComponent } from './features/trade-in-requests/trade-in-request-overview/trade-in-request-overview.component';
import {AllProductsResolver} from './features/shop/all-products.resolver';
import {TradeInRequestCompletionComponent} from './features/trade-in-requests/trade-in-request-completion/trade-in-request-completion.component';
import {ProductResolver} from './features/shop/product.resolver';
import {ShoppingCartComponent} from './features/shop/cart/shopping-cart.component';
import {ShopProductOverviewComponent} from './features/shop/shop-list/shop-product-overview.component';
import {ShopProductDetailsComponent} from './features/shop/shop-detail/shop-product-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop',
      component: ShopComponent,
      resolve: { products: AllProductsResolver },
      children: [
        { path: '', component: ShopProductOverviewComponent },
        { path: 'product/:id', component: ShopProductDetailsComponent, resolve: { product: ProductResolver }},
        { path: 'cart', component: ShoppingCartComponent},
  ]},
  { path: 'trade-in', redirectTo: 'trade-in/type', pathMatch: 'full' },
  { path: 'trade-in',
    component: TradeInRequestPageComponent,
    children: [
        { path: 'type', component: TradeInRequestJewelryTypeComponent, data: {animation: 'jewelryType'}},
        { path: 'material', component: TradeInRequestJewelryMaterialComponent, data: {animation: 'jewelryMaterial'}},
        { path: 'piece', component: TradeInRequestJewelrySelectionComponent, data: {animation: 'jewelryPiece'}},
        { path: 'condition', component: TradeInRequestJewelryConditionComponent, data: {animation: 'jewelryConditions'}},
        { path: 'indication', component: TradeInRequestCreditIndicationComponent, data: {animation: 'jewelryIndication'}},
        { path: 'overview', component: TradeInRequestOverviewComponent, data: {animation: 'jewelryOverview'}},
        { path: 'finalize', component: TradeInRequestFinalizationComponent, data: {animation: 'jewelryFinalization'}},
        { path: 'complete', component: TradeInRequestCompletionComponent, data: {animation: 'jewelryCompletion'}},
    ]
  },
  { path: 'stories', component: StoryPageComponent },
  { path: 'me/edit', component: AccountPageComponent },
  { path: 'admin', component: AdminComponent, children: [
      { path: 'products', component: AdminProductsOverviewComponent },
      { path: 'stories', component: AdminStoriesOverviewComponent },
      { path: 'trade-in', component: AdminTradeInRequestOverviewComponent, resolve: { requests: AllTradeInRequestResolver }},
      { path: 'trade-in/edit/:id', component: AdminTradeInRequestEditComponent, resolve: { request: TradeInRequestResolver }},
      { path: 'credit-indications', component: AdminCreditIndicationsOverviewComponent },
      { path: 'permissions', component: AdminPermissionsOverviewComponent },
    ] },
  // { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  // { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
