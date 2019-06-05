import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './features/core/home/home.component';
import {ShopComponent} from './features/shop/shop.component';
import {AccountPageComponent} from './features/account/account-page.component';
import {StoryPageComponent} from './features/stories/story-page.component';
import {TradeInRequestPageComponent} from './features/trade-in-requests/trade-in-request-page.component';
import {TradeInRequestJewelryTypeComponent} from './features/trade-in-requests/trade-in-request-jewelry-type/trade-in-request-jewelry-type.component';
import {TradeInRequestJewelryMaterialComponent} from './features/trade-in-requests/trade-in-request-jewelry-material/trade-in-request-jewelry-material.component';
import {AdminComponent} from './admin/admin.component';
import {AdminProductsOverviewComponent} from './admin/features/products/admin-products-overview/admin-products-overview.component';
import {AdminStoriesOverviewComponent} from './admin/features/stories/admin-stories-overview/admin-stories-overview.component';
import {AdminTradeInRequestOverviewComponent} from './admin/features/trade-in-requests/admin-trade-in-request-overview/admin-trade-in-request-overview.component';
import {AdminCreditIndicationsOverviewComponent} from './admin/features/credit-indications/admin-credit-indications-overview/admin-credit-indications-overview.component';
import {AdminPermissionsOverviewComponent} from './admin/features/permissions/admin-permissions-overview/admin-permissions-overview.component';
import {AllTradeInRequestsResolver} from './shared/services/trade-in/resolvers/all-trade-in-requests.resolver';
import {AdminTradeInRequestEditComponent} from './admin/features/trade-in-requests/admin-trade-in-request-edit/admin-trade-in-request-edit.component';
import {TradeInRequestResolver} from './shared/services/trade-in/resolvers/trade-in-request.resolver';
import {TradeInRequestJewelrySelectionComponent} from './features/trade-in-requests/trade-in-request-jewelry-selection/trade-in-request-jewelry-selection.component';
import {TradeInRequestFinalizationComponent} from './features/trade-in-requests/trade-in-request-finalization/trade-in-request-finalization.component';
import {TradeInRequestJewelryConditionComponent} from './features/trade-in-requests/trade-in-request-jewelry-condition/trade-in-request-jewelry-condition.component';
import {TradeInRequestCreditIndicationComponent} from './features/trade-in-requests/trade-in-request-credit-indication/trade-in-request-credit-indication.component';
import {TradeInRequestOverviewComponent} from './features/trade-in-requests/trade-in-request-overview/trade-in-request-overview.component';
import {AllProductsResolver} from './features/shop/all-products.resolver';
import {TradeInRequestCompletionComponent} from './features/trade-in-requests/trade-in-request-completion/trade-in-request-completion.component';
import {ProductResolver} from './features/shop/product.resolver';
import {ShoppingCartComponent} from './features/shop/cart/shopping-cart.component';
import {ShopListComponent} from './features/shop/shop-list/shop-list.component';
import {ShopProductDetailsComponent} from './features/shop/shop-detail/shop-product-details.component';
import {AdminProductEditComponent} from './admin/features/products/admin-product-edit/admin-product-edit.components';
import {LoginComponent} from './features/auth/login/login.component';
import {AllProductRatingsResolver} from './shared/services/product/all-product-ratings.resolver';
import {AllProductCategoriesResolver} from './shared/services/product/all-product-categories.resolver';
import {LogoutComponent} from './features/auth/logout/logout.component';
import {ErrorPageComponent} from './shared/components/error-page/error-page.component';
import {RegisterComponent} from './features/auth/register/register.component';
import {PermissionGuard} from './features/auth/permission.guard';
import {AccountInfoComponent} from './features/account/features/account-info/account-info/account-info.component';
import {OrderHistoryOverviewComponent} from './features/account/features/order-history/order-history-overview/order-history-overview.component';
import {OrderHistoryEditComponent} from './features/account/features/order-history/order-history-edit/order-history-edit.component';
import {TradeInHistoryOverviewComponent} from './features/account/features/trade-in-history/trade-in-history-overview/trade-in-history-overview.component';
import {TradeInHistoryEditComponent} from './features/account/features/trade-in-history/trade-in-history-edit/trade-in-history-edit.component';
import {UserTradeInRequestsResolver} from './shared/services/trade-in/resolvers/user-trade-in-requests.resolver';
import {LoginGuard} from './features/auth/login.guard';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'shop',
      component: ShopComponent,
      resolve: { products: AllProductsResolver },
      children: [
        { path: '', component: ShopListComponent },
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
        { path: 'finalize', component: TradeInRequestFinalizationComponent, data: {animation: 'jewelryFinalization'}, canActivate: [LoginGuard]},
        { path: 'complete', component: TradeInRequestCompletionComponent, data: {animation: 'jewelryCompletion'}},
    ]
  },
  { path: 'stories', component: StoryPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'account', component: AccountPageComponent, children: [
          { path: 'info', component: AccountInfoComponent },
          { path: 'order-history', component: OrderHistoryOverviewComponent },
          // { path: 'order-history/:id', component: OrderHistoryEditComponent },
          { path: 'trade-in-history', component: TradeInHistoryOverviewComponent, resolve: { requests: UserTradeInRequestsResolver } },
          // { path: 'trade-in-history/:id', component: TradeInHistoryEditComponent }
      ]},
  { path: 'admin', component: AdminComponent, canActivate: [PermissionGuard], data: { permissionLevel:  1}, children: [
      {path: '', redirectTo: '/admin/trade-in', pathMatch: 'full'},
      {path: 'products', component: AdminProductsOverviewComponent, canActivate: [PermissionGuard], data: { permissionLevel:  2}, resolve: {products: AllProductsResolver}},
      {
          path: 'products/edit/:id', component: AdminProductEditComponent, canActivate: [PermissionGuard], data: { permissionLevel:  2},
          resolve: {
            product: ProductResolver,
            productCategories: AllProductCategoriesResolver,
            productRatings: AllProductRatingsResolver,
      }},
      { path: 'stories', component: AdminStoriesOverviewComponent, canActivate: [PermissionGuard], data: { permissionLevel:  2} },
      { path: 'trade-in', component: AdminTradeInRequestOverviewComponent, canActivate: [PermissionGuard], data: { permissionLevel:  1}, resolve: { requests: AllTradeInRequestsResolver }},
      { path: 'trade-in/edit/:id', component: AdminTradeInRequestEditComponent, canActivate: [PermissionGuard], data: { permissionLevel:  1}, resolve: { request: TradeInRequestResolver }},
      { path: 'credit-indications', canActivate: [PermissionGuard], data: { permissionLevel:  2}, component: AdminCreditIndicationsOverviewComponent },
      { path: 'permissions', canActivate: [PermissionGuard], data: { permissionLevel:  3}, component: AdminPermissionsOverviewComponent },
      { path: '**', redirectTo: '/not-found' },
    ] },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  // { path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
