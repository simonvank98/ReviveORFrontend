import {CreditIndicationModifier} from '../../../../shared/services/credit-indication/credit-indication-modifier/credit-indication-modifier';

export class ModifierType {


    constructor(name: string) {
        this.name = name;

    }


    id: number;
    name: string;
    public indication: CreditIndicationModifier[] = [];

    add(indicationModifier: CreditIndicationModifier) {
        this.indication.push(indicationModifier);
    }
}
