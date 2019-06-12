import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './features/core/header/header.component';
import {FooterComponent} from './features/core/footer/footer.component';
import {HomeComponent} from './features/core/home/home.component';
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
import {AccountModule} from './features/account/account.module';
import {AuthenticationService} from './shared/services/auth/authentication.service';
import {UserDataResolver} from './shared/services/auth/user-data-resolver.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
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
        AccountModule,
        ShopModule,
        TradeInRequestsModule,
    ],
    providers: [
        ORApiService,
        APIService,
        AuthenticationService,
        {provide: HTTP_INTERCEPTORS, useClass: JSONCasingInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
