import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './modules/material-module/material.module';
import {MAT_DATE_LOCALE} from '@angular/material';
import {SafePipe} from './pipes/safe.pipe';
import {AppRoutingModule} from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PriceFormatDirective} from './directives/price-format.directive';
import {ModalComponent} from './services/modal-service/modal.component';
import {TruncatePipe} from './pipes/truncate.pipe';
import {TableComponent} from './components/table/table.component';
import {FileUploadInputForSafeDirective} from './components/mass-file-uploader/fileUploadInputForSafe.directive';
import { MassFileUploaderComponent } from './components/mass-file-uploader/mass-file-uploader.component';
import {FileSelectionComponent} from './components/file-selection/file-selection.component';


@NgModule({
  declarations: [
      SafePipe,
      PriceFormatDirective,
      FileUploadInputForSafeDirective,
      ModalComponent,
      TruncatePipe,
      TableComponent,
      MassFileUploaderComponent,
      FileSelectionComponent
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
      FileUploadInputForSafeDirective,
      TableComponent,
      MassFileUploaderComponent
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
