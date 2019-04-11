import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './core/home/home.component';
import {ShopComponent} from './shop/shop.component';
import {AccountPageComponent} from './account-page/account-page.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {StoryPageComponent} from './story-page/story-page.component';
import {TradeInRequestPageComponent} from './trade-in-request-page/trade-in-request-page.component';
import { TradeInRequestJewelryTypeComponent } from './trade-in-request-page/trade-in-request-jewelry-type/trade-in-request-jewelry-type.component';
import { TradeInRequestJewelryMaterialComponent } from './trade-in-request-page/trade-in-request-jewelry-material/trade-in-request-jewelry-material.component';
import {AdminComponent} from './admin/admin.component';
import {AdminProductsOverviewComponent} from './admin/products/admin-products-overview/admin-products-overview.component';
import {AdminStoriesOverviewComponent} from './admin/stories/admin-stories-overview/admin-stories-overview.component';
import {AdminTradeInRequestOverviewComponent} from './admin/trade-in-requests/admin-trade-in-request-overview/admin-trade-in-request-overview.component';
import {AdminCreditIndicationsOverviewComponent} from './admin/credit-indications/admin-credit-indications-overview/admin-credit-indications-overview.component';
import {AdminPermissionsOverviewComponent} from './admin/permissions/admin-permissions-overview/admin-permissions-overview.component';
import {AllTradeInRequestResolver} from './admin/trade-in-requests/all-trade-in-request.resolver';
import {AdminTradeInRequestEditComponent} from './admin/trade-in-requests/admin-trade-in-request-edit/admin-trade-in-request-edit.component';
import {TradeInRequestResolver} from './admin/trade-in-requests/trade-in-request.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'trade-in', redirectTo: 'trade-in/type', pathMatch: 'full' },
  { path: 'trade-in',
    component: TradeInRequestPageComponent,
    children: [
        { path: 'type', component: TradeInRequestJewelryTypeComponent, },
        { path: 'material', component: TradeInRequestJewelryMaterialComponent, },
    ]
  },
  { path: 'stories', component: StoryPageComponent },
  // { path: 'shopping-cart', component: ShoppingCartComponent },
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
