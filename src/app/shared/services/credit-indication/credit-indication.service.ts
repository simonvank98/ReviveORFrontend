import { TradeInProcessContainer } from './../../../features/trade-in-requests/trade-in-process-container.model';
import { CreditIndicationModifierService } from './credit-indication-modifier/credit-indication-modifier.service';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditIndicationModifier } from './credit-indication-modifier/credit-indication-modifier';
import { resolve } from 'url';
import { ORProductService } from '../or-product/or-product.service';

@Injectable({
    providedIn: 'root'
})
export class CreditIndicationService {

    private tradeInProcessContainer: TradeInProcessContainer;
    private creditIndicationModifiers: CreditIndicationModifier[];

    // Maps database property names to TradeInProcessContainer property names
    private dict = {
        'Missing piece': 'missing',
        'Bent': 'bent',
        'Scratched': 'scratched',
        'Broken': 'broken'
    };

    constructor(private creditIndicationModifierService: CreditIndicationModifierService,
                private orProductService: ORProductService) { }

    // Gets the current price indication of a trade in request using a TradeInProcessContainer
    public getIndication(tradeInProcessContainer: TradeInProcessContainer): Promise<{}> {
        this.tradeInProcessContainer = tradeInProcessContainer;

        // Indication promise to return
        const indication = new Promise<{}>(resolve => {
            // API call to get the credit indication modifiers
            this.creditIndicationModifierService.getAll().subscribe(creditIndicationModifiers => {
                this.setCreditIndicationModifiers(creditIndicationModifiers);

                // Resolves the promise with a price indication number
                resolve(this.calculateIndication());
            });
        });

        return indication;
    }

    // Sets the credit indication modifiers to be used for the indication
    public setCreditIndicationModifiers(creditIndicationModifiers: CreditIndicationModifier[]) {
        this.creditIndicationModifiers = creditIndicationModifiers;
    }

    // Calculates the price indication of the trade in request
    public calculateIndication(): {} {
        const jewelryPiece = this.tradeInProcessContainer.jewelryPiece;
        const category = jewelryPiece.category.name;
        let newPrice = 0;
        let basePrice = 0;
        let indication = 0;
        const modifiers = [0];

        // Determine the new price of the selected property
        jewelryPiece.properties.forEach(property => {
            if (property.value === this.tradeInProcessContainer.property) {
                newPrice = property.price;
            }
        });

        // If no properties were found then this means the property name is null,
        // but there is still a price available in the first property
        if (newPrice === 0) {
            newPrice = jewelryPiece.properties[0].price;
        }

        // Determine the value of the indication
        this.creditIndicationModifiers.forEach(creditIndicationModifier => {
            const criterionName = creditIndicationModifier.criterion.name;
            // Check if category matches e.g. only 'Rings' modifiers should apply to a ring
            if (creditIndicationModifier.category.name === category) {
                // If the criterion name is 'Base', determine the base price of the jewelry piece
                if (criterionName === 'Base') {
                    basePrice = this.round(newPrice * (creditIndicationModifier.effect / 100));
                } else {
                    // If the modifier is active, calculate the amount to modify the final price by
                    if (this.tradeInProcessContainer[this.dict[criterionName]]) {
                        modifiers.push(this.round((newPrice * (creditIndicationModifier.effect / 100))));
                    }
                }
            }
        });

        // The indication is the base price minus the modifiers added up
        indication = this.round(basePrice - modifiers.reduce(this.getSum));

        console.log('-----Indication-----');
        console.log('New price: ' + newPrice);
        console.log('Base value: ' + basePrice);
        console.log('Modifier subtractions: ' + modifiers);
        console.log('Indication: ' + indication);

        // Return an object with the indication and the maximum value possible for this jewelry piece (basePrice)
        return {indication: indication, basePrice: basePrice };
    }

    // Rounds number to 2 decimal places
    private round(num) {
        return Math.round(num * 100) / 100;
    }

    // Adds up 2 numbers for use inside of a reduce
    private getSum(total, num) {
        return total + num;
    }

}
