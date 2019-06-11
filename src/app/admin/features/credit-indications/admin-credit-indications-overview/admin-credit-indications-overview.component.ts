import {Component, OnInit} from '@angular/core';
import {CreditIndicationModifierService} from '../../../../shared/services/credit-indication/credit-indication-modifier/credit-indication-modifier.service';
import {ModifierType} from './modifier-type';
import {CreditIndicationModifier} from '../../../../shared/services/credit-indication/credit-indication-modifier/credit-indication-modifier';
import {CreditIndicationService} from '../../../../shared/services/credit-indication/credit-indication.service';

@Component({
  selector: 'app-admin-credit-indications-overview',
  templateUrl: './admin-credit-indications-overview.component.html',
  styleUrls: ['./admin-credit-indications-overview.component.scss']
})
export class AdminCreditIndicationsOverviewComponent implements OnInit {

    modifierTypes: ModifierType[] = [];
    isDisabled = true;
    newPrice: number;
    indication: number;

    jewelryConditions = {
        missingPiece: false,
        scratched: false,
        bent: false,
        broken: false
    };

    constructor(public creditIndicationModifierService: CreditIndicationModifierService, public creditIndicationService: CreditIndicationService) {
    }

    ngOnInit() {
        let indicationmodifiers: CreditIndicationModifier[] = null;
        this.creditIndicationModifierService.getAll().subscribe(data => {
            indicationmodifiers = data;
            for (const indicationModifier of indicationmodifiers) {
                if (this.modifierTypes[indicationModifier.criterion.id - 1] == null) {
                    this.modifierTypes[indicationModifier.criterion.id - 1] = new ModifierType(indicationModifier.criterion.name);
                }
                this.modifierTypes[indicationModifier.criterion.id - 1].add(indicationModifier);
            }
        });
        this.updatePrice();
    }

    onEdit($event: any) {
        this.isDisabled = false;
    }

    save () {
        const alldata = [];
        for (const modifiers of this.modifierTypes) {
            for (const indication of modifiers.indication) {
                alldata.push(indication);
            }
        }
        this.creditIndicationModifierService.update(alldata).subscribe( data => {
            this.updatePrice();
        });
        this.isDisabled = true;
    }

    checkboxChanged(event) {
        this.jewelryConditions[event.target.id] = !this.jewelryConditions[event.target.id];
        this.updatePrice();
    }
    private updatePrice() {
        this.creditIndicationService.getExampleIndication(
            {jewelryCondition: this.jewelryConditions,
                jewelryType: 'rings', orProductId: '122', selectedProperty: 's'})
            .subscribe( data => {
            this.newPrice = data.newPrice;
            this.indication = data.indication;
        });
    }
}
