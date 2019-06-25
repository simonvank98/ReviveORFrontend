import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TradeInRequestPageComponent} from './trade-in-request-page.component';
import {TradeInRequestJewelryTypeComponent} from './trade-in-request-jewelry-type/trade-in-request-jewelry-type.component';
import {TradeInRequestJewelryMaterialComponent} from './trade-in-request-jewelry-material/trade-in-request-jewelry-material.component';
import {TradeInRequestJewelrySelectionComponent} from './trade-in-request-jewelry-selection/trade-in-request-jewelry-selection.component';
import {SelectionButtonComponent} from './selection-button/selection-button.component';
import {StepperComponent} from '../../shared/components/stepper/stepper.component';
import {ControlButtonsComponent} from './control-buttons/control-buttons.component';
import {TradeInRequestJewelryConditionComponent} from './trade-in-request-jewelry-condition/trade-in-request-jewelry-condition.component';
import {TradeInRequestCreditIndicationComponent} from './trade-in-request-credit-indication/trade-in-request-credit-indication.component';
import {TradeInRequestOverviewComponent} from './trade-in-request-overview/trade-in-request-overview.component';
import {TradeInRequestFinalizationComponent} from './trade-in-request-finalization/trade-in-request-finalization.component';
import {TradeInRequestCompletionComponent} from './trade-in-request-completion/trade-in-request-completion.component';
import {CountUpModule} from 'countup.js-angular2';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [
        TradeInRequestPageComponent,
        TradeInRequestJewelryTypeComponent,
        TradeInRequestJewelryMaterialComponent,
        TradeInRequestJewelrySelectionComponent,
        SelectionButtonComponent,
        StepperComponent,
        ControlButtonsComponent,
        TradeInRequestJewelryConditionComponent,
        TradeInRequestCreditIndicationComponent,
        TradeInRequestOverviewComponent,
        TradeInRequestFinalizationComponent,
        TradeInRequestCompletionComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        CountUpModule,
    ]
})
export class TradeInRequestsModule {
}
