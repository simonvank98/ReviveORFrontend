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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {AdminModule} from './admin/admin.module';
import {ORApiService} from './shared/services/api/or-api.service';
import {APIService} from './shared/services/api/api.service';
import {ShopModule} from './features/shop/shop.module';
import {JSONCasingInterceptor} from './shared/utilities/JSONCasing.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LoginComponent} from './features/auth/login/login.component';
import {AuthInterceptor} from './features/auth/auth.interceptor';
import {LogoutComponent} from './features/auth/logout/logout.component';
import {RegisterComponent} from './features/auth/register/register.component';
import {TradeInRequestsModule} from './features/trade-in-requests/trade-in-requests.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AccountPageComponent,
        ErrorPageComponent,
        LoginComponent,
        LogoutComponent,
        RegisterComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule,
        AppRoutingModule,
        AdminModule,
        ShopModule,
        TradeInRequestsModule,
    ],
    providers: [
        ORApiService,
        APIService,
        {provide: HTTP_INTERCEPTORS, useClass: JSONCasingInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
