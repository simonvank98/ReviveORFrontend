import { CountUpModule } from 'countup.js-angular2';
import {ControlButtonsComponent} from './features/trade-in-requests/control-buttons/control-buttons.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './features/core/header/header.component';
import {FooterComponent} from './features/core/footer/footer.component';
import {HomeComponent} from './features/core/home/home.component';
import {ShopListComponent} from './features/shop/shop-list/shop-list.component';
import {ShopItemComponent} from './features/shop/shop-list/shop-item/shop-item.component';
import {ShopSearchComponent} from './features/shop/shop-search/shop-search.component';
import {ShopDetailComponent} from './features/shop/shop-detail/shop-detail.component';
import {ShopComponent} from './features/shop/shop.component';
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
import {TradeInRequestJewelryPieceComponent} from './features/trade-in-requests/trade-in-request-jewelry-piece/trade-in-request-jewelry-piece.component';
import { SelectionButtonComponent } from './features/trade-in-requests/selection-button/selection-button.component';
import { TradeInRequestJewelryConditionComponent } from './features/trade-in-requests/trade-in-request-jewelry-condition/trade-in-request-jewelry-condition.component';
import { TradeInRequestCreditIndicationComponent } from './features/trade-in-requests/trade-in-request-credit-indication/trade-in-request-credit-indication.component';
import { TradeInRequestOverviewComponent } from './features/trade-in-requests/trade-in-request-overview/trade-in-request-overview.component';
import { TradeInRequestFinalizationComponent } from './features/trade-in-requests/trade-in-request-finalization/trade-in-request-finalization.component';

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
      TradeInRequestOverviewComponent,
      TradeInRequestFinalizationComponent
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
