import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './features/core/home/home.component';
import {ShopComponent} from './features/shop/shop.component';
import {AccountPageComponent} from './features/accounts/account-page.component';
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
import {AllTradeInRequestResolver} from './admin/features/trade-in-requests/all-trade-in-request.resolver';
import {AdminTradeInRequestEditComponent} from './admin/features/trade-in-requests/admin-trade-in-request-edit/admin-trade-in-request-edit.component';
import {TradeInRequestResolver} from './admin/features/trade-in-requests/trade-in-request.resolver';
import { TradeInRequestJewelryPieceComponent } from './features/trade-in-requests/trade-in-request-jewelry-piece/trade-in-request-jewelry-piece.component';
import { TradeInRequestJewelryConditionComponent } from './features/trade-in-requests/trade-in-request-jewelry-condition/trade-in-request-jewelry-condition.component';
import { TradeInRequestCreditIndicationComponent } from './features/trade-in-requests/trade-in-request-credit-indication/trade-in-request-credit-indication.component';
import { TradeInRequestOverviewComponent } from './features/trade-in-requests/trade-in-request-overview/trade-in-request-overview.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'trade-in', redirectTo: 'trade-in/type', pathMatch: 'full' },
  { path: 'trade-in',
    component: TradeInRequestPageComponent,
    children: [
        { path: 'type', component: TradeInRequestJewelryTypeComponent, },
        { path: 'material', component: TradeInRequestJewelryMaterialComponent, },
        { path: 'piece', component: TradeInRequestJewelryPieceComponent, },
        { path: 'condition', component: TradeInRequestJewelryConditionComponent, },
        { path: 'indication', component: TradeInRequestCreditIndicationComponent, },
        { path: 'overview', component: TradeInRequestOverviewComponent, },
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
