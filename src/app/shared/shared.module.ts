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
import {FileUploadControlBarComponent} from './components/file-upload-control-bar/file-upload-control-bar.component';
import {FileDropzoneComponent} from './components/file-dropzone/file-dropzone.component';
import {ImageGalleryComponent} from './components/image-gallery/image-gallery.component';
import {NgxGalleryModule} from 'ngx-gallery';
import {AllProductRatingsResolver} from './services/product/all-product-ratings.resolver';
import {AllProductCategoriesResolver} from './services/product/all-product-categories.resolver';
import {SliderModule} from 'primeng/slider';
import {Ng5SliderModule} from 'ng5-slider';
import {StarRatingConfigService, StarRatingModule} from 'angular-star-rating';
import {TradeInRequestResolver} from './services/trade-in/resolvers/trade-in-request.resolver';
import {AllTradeInRequestsResolver} from './services/trade-in/resolvers/all-trade-in-requests.resolver';
import {UserTradeInRequestsResolver} from './services/trade-in/resolvers/user-trade-in-requests.resolver';
import {YesnoPipe} from './pipes/yesno.pipe';
import {AllStoriesResolver} from './services/stories/all-stories.resolver';
import {StoryResolver} from './services/stories/story.resolver';
import {AllPublishedStoriesResolver} from './services/stories/all-published-stories.resolver';
import {WithoutProductsStoriesResolver} from './services/stories/without-products-stories.resolver';
import {AllProductWithoutStoryResolver} from './services/product/all-product-without-story.resolver';
import {UserDataResolverGuard} from './services/auth/user-data-resolver.service';
import {InvoiceResolver} from './services/invoices/invoice.resolver';
import {InvoiceService} from './services/invoices/invoice.service';
import {ProductEditResolver} from './services/product/product.edit.resolver';

@NgModule({
    declarations: [
        SafePipe,
        YesnoPipe,
        PriceFormatDirective,
        FileDragAndDropDirective,
        ModalComponent,
        TruncatePipe,
        TableComponent,
        MassFileUploaderComponent,
        FileSelectionComponent,
        FileUploadControlBarComponent,
        FileDropzoneComponent,
        ImageGalleryComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MaterialModule,
        MatFormFieldModule,
        MatInputModule,
        NgxGalleryModule,
        SliderModule,
        Ng5SliderModule,
        StarRatingModule
    ],
    exports: [
        MaterialModule,
        AppRoutingModule,
        SafePipe,
        TruncatePipe,
        YesnoPipe,
        ReactiveFormsModule,
        FormsModule,
        StarRatingModule,
        SliderModule,
        Ng5SliderModule,
        ModalComponent,
        PriceFormatDirective,
        FileDragAndDropDirective,
        TableComponent,
        MassFileUploaderComponent,
        FileSelectionComponent,
        ImageGalleryComponent,
        FileUploadControlBarComponent
    ],
    entryComponents: [
        ModalComponent
    ],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'nl-NL'},
        AllProductRatingsResolver,
        AllProductCategoriesResolver,
        AllProductWithoutStoryResolver,
        StarRatingConfigService,
        TradeInRequestResolver,
        AllTradeInRequestsResolver,
        UserTradeInRequestsResolver,
        UserDataResolverGuard,
        UserTradeInRequestsResolver,
        AllStoriesResolver,
        StoryResolver,
        AllPublishedStoriesResolver,
        WithoutProductsStoriesResolver,
        InvoiceResolver,
        InvoiceService,
        ProductEditResolver
    ]
})
export class SharedModule {
}
