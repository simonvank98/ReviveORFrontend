import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminProductsOverviewComponent } from './features/products/admin-products-overview/admin-products-overview.component';
import { AdminStoriesOverviewComponent } from './features/stories/admin-stories-overview/admin-stories-overview.component';
import { AdminPermissionsOverviewComponent } from './features/permissions/admin-permissions-overview/admin-permissions-overview.component';
import {AdminSideNavigationComponent} from './admin-side-navigation/admin-side-navigation.component';
import {TableComponent} from '../shared/components/table/table.component';
import {SharedModule} from '../shared/shared.module';
import {AdminTradeInRequestOverviewComponent} from './features/trade-in-requests/admin-trade-in-request-overview/admin-trade-in-request-overview.component';
import {AdminCreditIndicationsOverviewComponent} from './features/credit-indications/admin-credit-indications-overview/admin-credit-indications-overview.component';
import { AdminTradeInRequestEditComponent } from './features/trade-in-requests/admin-trade-in-request-edit/admin-trade-in-request-edit.component';
import {AllTradeInRequestsResolver} from '../shared/services/trade-in/resolvers/all-trade-in-requests.resolver';
import {TradeInRequestResolver} from '../shared/services/trade-in/resolvers/trade-in-request.resolver';
import {AdminProductEditComponent} from './features/products/admin-product-edit/admin-product-edit.components';

import {TableModule} from 'primeng/table';
import {DropdownModule, InputTextModule} from 'primeng/primeng';
import {AdminProductCreateComponent} from './features/products/admin-product-create/admin-product-create.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        TableModule,
        DropdownModule,
        InputTextModule
    ],
  declarations: [
    AdminComponent,
    AdminTradeInRequestOverviewComponent,
    AdminProductsOverviewComponent,
    AdminProductEditComponent,
    AdminStoriesOverviewComponent,
    AdminCreditIndicationsOverviewComponent,
    AdminPermissionsOverviewComponent,
    AdminSideNavigationComponent,
    AdminTradeInRequestEditComponent,
    AdminProductCreateComponent
  ],
  providers: [
    AllTradeInRequestsResolver,
    TradeInRequestResolver
  ],
})
export class AdminModule { }
