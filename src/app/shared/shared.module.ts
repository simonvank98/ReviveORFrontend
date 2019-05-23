import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './modules/material-module/material.module';
import {MAT_DATE_LOCALE, MatFormFieldModule, MatInputModule} from '@angular/material';
import {SafePipe} from './pipes/safe.pipe';
import {AppRoutingModule} from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PriceFormatDirective} from './directives/price-format.directive';
import {ModalComponent} from './services/modal-service/modal.component';
import {TruncatePipe} from './pipes/truncate.pipe';
import {TableComponent} from './components/table/table.component';
import {MassFileUploaderComponent} from './components/mass-file-uploader/mass-file-uploader.component';
import {FileSelectionComponent} from './components/file-selection/file-selection.component';
import {FileDragAndDropDirective} from './components/mass-file-uploader/fileDragAndDrop.directive';
import { FileUploadControlBarComponent } from './components/file-upload-control-bar/file-upload-control-bar.component';
import { FileDropzoneComponent } from './components/file-dropzone/file-dropzone.component';

@NgModule({
    declarations: [
        SafePipe,
        PriceFormatDirective,
        FileDragAndDropDirective,
        ModalComponent,
        TruncatePipe,
        TableComponent,
        MassFileUploaderComponent,
        FileSelectionComponent,
        FileUploadControlBarComponent,
        FileDropzoneComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MaterialModule,
        MatFormFieldModule,
        MatInputModule
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
        FileDragAndDropDirective,
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
