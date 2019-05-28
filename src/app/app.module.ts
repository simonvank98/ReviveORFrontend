import {CountUpModule} from 'countup.js-angular2';
import {ControlButtonsComponent} from './features/trade-in-requests/control-buttons/control-buttons.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './features/core/header/header.component';
import {FooterComponent} from './features/core/footer/footer.component';
import {HomeComponent} from './features/core/home/home.component';
import {AccountPageComponent} from './features/accounts/account-page.component';
import {ErrorPageComponent} from './shared/components/error-page/error-page.component';
import {StoryPageComponent} from './features/stories/story-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {TradeInRequestPageComponent} from './features/trade-in-requests/trade-in-request-page.component';
import {StepperComponent} from './shared/components/stepper/stepper.component';
import {TradeInRequestJewelryTypeComponent} from './features/trade-in-requests/trade-in-request-jewelry-type/trade-in-request-jewelry-type.component';
import {TradeInRequestJewelryMaterialComponent} from './features/trade-in-requests/trade-in-request-jewelry-material/trade-in-request-jewelry-material.component';
import {AdminModule} from './admin/admin.module';
import {ApiService} from './shared/services/api/api.service';
import {ORApiService} from './shared/services/api/or-api.service';
import {TempApiService} from './shared/services/api/temp-api.service';
import {TradeInRequestJewelrySelectionComponent} from './features/trade-in-requests/trade-in-request-jewelry-selection/trade-in-request-jewelry-selection.component';
import {SelectionButtonComponent} from './features/trade-in-requests/selection-button/selection-button.component';
import {TradeInRequestJewelryConditionComponent} from './features/trade-in-requests/trade-in-request-jewelry-condition/trade-in-request-jewelry-condition.component';
import {TradeInRequestCreditIndicationComponent} from './features/trade-in-requests/trade-in-request-credit-indication/trade-in-request-credit-indication.component';
import {TradeInRequestOverviewComponent} from './features/trade-in-requests/trade-in-request-overview/trade-in-request-overview.component';
import {ShopModule} from './features/shop/shop.module';
import { TradeInRequestFinalizationComponent } from './features/trade-in-requests/trade-in-request-finalization/trade-in-request-finalization.component';
import {JSONCasingInterceptor} from './shared/utilities/JSONCasing.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { TradeInRequestCompletionComponent } from './features/trade-in-requests/trade-in-request-completion/trade-in-request-completion.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AccountPageComponent,
        ErrorPageComponent,
        TradeInRequestPageComponent,
        TradeInRequestJewelryTypeComponent,
        TradeInRequestJewelryMaterialComponent,
        TradeInRequestJewelrySelectionComponent,
        SelectionButtonComponent,
        StoryPageComponent,
        StepperComponent,
        ControlButtonsComponent,
        TradeInRequestJewelryConditionComponent,
        TradeInRequestCreditIndicationComponent,
        TradeInRequestOverviewComponent,
        TradeInRequestFinalizationComponent,
        TradeInRequestCompletionComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule,
        AppRoutingModule,
        AdminModule,
        ShopModule,
        CountUpModule,
        BrowserAnimationsModule
    ],
    providers: [
        ApiService,
        ORApiService,
        TempApiService,
        { provide: HTTP_INTERCEPTORS, useClass: JSONCasingInterceptor, multi: true },
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
