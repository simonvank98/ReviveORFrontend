import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './modules/material-module/material.module';
import {MAT_DATE_LOCALE} from '@angular/material';
import {SafePipe} from './pipes/safe.pipe';
import {AppRoutingModule} from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PriceFormatDirective} from './directives/price-format.directive';
import {ModalComponent} from './services/modal/modal.component';
import {TruncatePipe} from './pipes/truncate.pipe';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [
      SafePipe,
      PriceFormatDirective,
      ModalComponent,
      TruncatePipe,
      TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
      MaterialModule,
      AppRoutingModule,
      SafePipe,
      TruncatePipe,
      ReactiveFormsModule,
      FormsModule,
      ModalComponent,
      PriceFormatDirective,
      TableComponent
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'nl-NL'},

  ]
})
export class SharedModule {
}
