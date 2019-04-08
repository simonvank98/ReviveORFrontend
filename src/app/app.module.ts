import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AdminSideNavigationComponent } from './admin/admin-side-navigation/admin-side-navigation.component';
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
import { TradeInPageComponent } from './trade-in-page/trade-in-page.component';
import { StoryPageComponent } from './story-page/story-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import { TableComponent } from './shared/table/table.component';
import { MatTableModule, MatSortModule } from '@angular/material';

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
      AdminPanelComponent,
      ErrorPageComponent,
      PageNotFoundComponent,
      TradeInPageComponent,
      StoryPageComponent,
      AdminSideNavigationComponent,
      TableComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      SharedModule,
      AppRoutingModule,
    //   BrowserModule,
    //   MatTableModule,
    //   MatSortModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
