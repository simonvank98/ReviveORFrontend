import { ControlButtonsComponent } from './features/trade-in-requests/control-buttons/control-buttons.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/core/header/header.component';
import { FooterComponent } from './features/core/footer/footer.component';
import { HomeComponent } from './features/core/home/home.component';
import { ShopListComponent } from './features/shop/shop-list/shop-list.component';
import { ShopItemComponent } from './features/shop/shop-list/shop-item/shop-item.component';
import { ShopSearchComponent } from './features/shop/shop-search/shop-search.component';
import { ShopDetailComponent } from './features/shop/shop-detail/shop-detail.component';
import { ShopComponent } from './features/shop/shop.component';
import { AccountPageComponent } from './features/accounts/account-page.component';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';
import { StoryPageComponent } from './features/stories/story-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import { TradeInRequestPageComponent } from './features/trade-in-requests/trade-in-request-page.component';
import { StepperComponent } from './shared/components/stepper/stepper.component';
import { TradeInRequestJewelryTypeComponent } from './features/trade-in-requests/trade-in-request-jewelry-type/trade-in-request-jewelry-type.component';
import { TradeInRequestJewelryMaterialComponent } from './features/trade-in-requests/trade-in-request-jewelry-material/trade-in-request-jewelry-material.component';
import {AdminModule} from './admin/admin.module';

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
      StoryPageComponent,
      StepperComponent,
      ControlButtonsComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      SharedModule,
      AppRoutingModule,
      AdminModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
