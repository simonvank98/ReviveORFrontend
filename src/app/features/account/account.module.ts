import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {TableModule} from 'primeng/table';
import {AccountSideNavigationComponent} from './account-side-navigation/account-side-navigation.component';
import {OrderHistoryOverviewComponent} from './features/order-history/order-history-overview/order-history-overview.component';
import {TradeInHistoryOverviewComponent} from './features/trade-in-history/trade-in-history-overview/trade-in-history-overview.component';
import {AccountPageComponent} from './account-page.component';

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
        TradeInHistoryOverviewComponent,
    ],
    providers: [
        //
    ],
})
export class AccountModule { }
