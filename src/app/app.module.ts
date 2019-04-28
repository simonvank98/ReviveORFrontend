import { ControlButtonsComponent } from './trade-in-request-page/control-buttons/control-buttons.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './core/home/home.component';
import { ShopListComponent } from './shop/shop-list/shop-list.component';
import { ShopItemComponent } from './shop/shop-list/shop-item/shop-item.component';
import { ShopSearchComponent } from './shop/shop-search/shop-search.component';
import { ShopDetailComponent } from './shop/shop-detail/shop-detail.component';
import { ShopComponent } from './shop/shop.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StoryPageComponent } from './story-page/story-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import { TradeInRequestPageComponent } from './trade-in-request-page/trade-in-request-page.component';
import { StepperComponent } from './shared/stepper/stepper.component';
import { TradeInRequestJewelryTypeComponent } from './trade-in-request-page/trade-in-request-jewelry-type/trade-in-request-jewelry-type.component';
import { TradeInRequestJewelryMaterialComponent } from './trade-in-request-page/trade-in-request-jewelry-material/trade-in-request-jewelry-material.component';
import {AdminModule} from './admin/admin.module';
import { TableComponent } from './shared/table/table.component';
import { TradeInRequestJewelryPieceComponent } from './trade-in-request-page/trade-in-request-jewelry-piece/trade-in-request-jewelry-piece.component';
import { ApiService } from './shared/api.service';
import { ORApiService } from './shared/or-api.service';
import { TempApiService } from './shared/temp-api.service';
import { SelectionButtonComponent } from './trade-in-request-page/selection-button/selection-button.component';
import { TradeInRequestJewelryConditionComponent } from './trade-in-request-page/trade-in-request-jewelry-condition/trade-in-request-jewelry-condition.component';
import { TradeInRequestCreditIndicationComponent } from './trade-in-request-page/trade-in-request-credit-indication/trade-in-request-credit-indication.component';
import { CountUpModule } from 'countup.js-angular2';
import { TradeInRequestOverviewComponent } from './trade-in-request-page/trade-in-request-overview/trade-in-request-overview.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      HomeComponent,
      ShopListComponent,
      ShopItemComponent,
      ShopSearchComponent,
      ShopDetailComponent,
      ShopComponent,
      AccountPageComponent,
      ErrorPageComponent,
      PageNotFoundComponent,
      TradeInRequestPageComponent,
      TradeInRequestJewelryTypeComponent,
      TradeInRequestJewelryMaterialComponent,
      TradeInRequestJewelryPieceComponent,
      SelectionButtonComponent,
      StoryPageComponent,
      StepperComponent,
      ControlButtonsComponent,
      TradeInRequestJewelryConditionComponent,
      TradeInRequestCreditIndicationComponent,
      TradeInRequestOverviewComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      SharedModule,
      AppRoutingModule,
      AdminModule,
      CountUpModule
   ],
   providers: [
       ApiService,
       ORApiService,
       TempApiService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
