import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {TableModule} from 'primeng/table';
import {AccountSideNavigationComponent} from './account-side-navigation/account-side-navigation.component';
import {OrderHistoryOverviewComponent} from './features/order-history/order-history-overview/order-history-overview.component';
import {OrderHistoryEditComponent} from './features/order-history/order-history-edit/order-history-edit.component';
import {TradeInHistoryOverviewComponent} from './features/trade-in-history/trade-in-history-overview/trade-in-history-overview.component';
import {TradeInHistoryEditComponent} from './features/trade-in-history/trade-in-history-edit/trade-in-history-edit.component';
import {AccountPageComponent} from './account-page.component';
import { AccountInfoComponent } from './features/account-info/account-info/account-info.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        TableModule,
    ],
    declarations: [
        AccountPageComponent,
        AccountSideNavigationComponent,
        OrderHistoryOverviewComponent,
        OrderHistoryEditComponent,
        TradeInHistoryOverviewComponent,
        TradeInHistoryEditComponent,
        AccountInfoComponent,
    ],
    providers: [
        //
    ],
})
export class AccountModule { }
