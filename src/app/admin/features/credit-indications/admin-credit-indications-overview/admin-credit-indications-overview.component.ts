import { Component, OnInit } from '@angular/core';
import {CreditIndicationModifierService} from '../../../../shared/services/credit-indication/credit-indication-modifier/credit-indication-modifier.service';
import {ModifierType} from './modifier-type';
import {CreditIndicationModifier} from '../../../../shared/services/credit-indication/credit-indication-modifier/credit-indication-modifier';

@Component({
  selector: 'app-admin-credit-indications-overview',
  templateUrl: './admin-credit-indications-overview.component.html',
  styleUrls: ['./admin-credit-indications-overview.component.scss']
})
export class AdminCreditIndicationsOverviewComponent implements OnInit {

    cars1 = [];
    modifierTypes: ModifierType[] = [];
    isDisabled = true;

    constructor(public creditIndicationModifierService: CreditIndicationModifierService) {
        this.cars1.push('Test');
        this.cars1.push('Test');
        this.cars1.push('Test');
        this.cars1.push('Test');
        this.cars1.push('Test');
        this.cars1.push('Test');
        this.cars1.push('Test');
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
            console.log(this.modifierTypes);
        });
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
        this.creditIndicationModifierService.update(alldata);
        this.isDisabled = true;
    }

}
