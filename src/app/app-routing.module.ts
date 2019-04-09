import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './core/home/home.component';
import {ShopComponent} from './shop/shop.component';
import {AccountPageComponent} from './account-page/account-page.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {StoryPageComponent} from './story-page/story-page.component';
import {TradeInRequestPageComponent} from './trade-in-request-page/trade-in-request-page.component';
import { TradeInRequestJewelryTypeComponent } from './trade-in-request-page/trade-in-request-jewelry-type/trade-in-request-jewelry-type.component';
import { TradeInRequestJewelryMaterialComponent } from './trade-in-request-page/trade-in-request-jewelry-material/trade-in-request-jewelry-material.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'trade-in', redirectTo: 'trade-in/type', pathMatch: 'full' },
  { path: 'trade-in',
    component: TradeInRequestPageComponent,
    children: [
        { path: 'type', component: TradeInRequestJewelryTypeComponent, },
        { path: 'material', component: TradeInRequestJewelryMaterialComponent, },
    ]
  },
  { path: 'stories', component: StoryPageComponent },
  // { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'me/edit', component: AccountPageComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
