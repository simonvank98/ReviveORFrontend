import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminProductsOverviewComponent } from './products/admin-products-overview/admin-products-overview.component';
import { AdminStoriesOverviewComponent } from './stories/admin-stories-overview/admin-stories-overview.component';
import { AdminPermissionsOverviewComponent } from './permissions/admin-permissions-overview/admin-permissions-overview.component';
import {AdminSideNavigationComponent} from './admin-side-navigation/admin-side-navigation.component';
import {TableComponent} from '../shared/table/table.component';
import {SharedModule} from '../shared/shared.module';
import {AdminTradeInRequestOverviewComponent} from './trade-in-requests/admin-trade-in-request-overview/admin-trade-in-request-overview.component';
import {AdminCreditIndicationsOverviewComponent} from './credit-indications/admin-credit-indications-overview/admin-credit-indications-overview.component';
import { AdminTradeInRequestEditComponent } from './trade-in-requests/admin-trade-in-request-edit/admin-trade-in-request-edit.component';
import {AllTradeInRequestResolver} from './trade-in-requests/all-trade-in-request.resolver';
import {TradeInRequestResolver} from './trade-in-requests/trade-in-request.resolver';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    AdminComponent,
    AdminTradeInRequestOverviewComponent,
    AdminProductsOverviewComponent,
    AdminStoriesOverviewComponent,
    AdminCreditIndicationsOverviewComponent,
    AdminPermissionsOverviewComponent,
    AdminSideNavigationComponent,
    TableComponent,
    AdminTradeInRequestEditComponent
  ],
  providers: [
    AllTradeInRequestResolver,
    TradeInRequestResolver
  ],
})
export class AdminModule { }
