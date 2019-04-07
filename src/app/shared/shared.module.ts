import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material-module/material.module';
import {MAT_DATE_LOCALE} from '@angular/material';
import {SafePipe} from './safe.pipe';
import {AppRoutingModule} from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PriceFormatDirective} from './price-format.directive';
import {ModalComponent} from './modal/modal.component';
import {TruncatePipe} from './truncate.pipe';


@NgModule({
  declarations: [SafePipe, PriceFormatDirective, ModalComponent, TruncatePipe],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [MaterialModule, AppRoutingModule, SafePipe, TruncatePipe,
    ReactiveFormsModule, FormsModule, ModalComponent, PriceFormatDirective],
  entryComponents: [
    ModalComponent
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'nl-NL'},

  ]
})
export class SharedModule {
}
