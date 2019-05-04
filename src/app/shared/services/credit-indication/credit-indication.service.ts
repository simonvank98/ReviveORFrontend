import { TradeInProcessContainer } from './../../../features/trade-in-requests/trade-in-process-container.model';
import { CreditIndicationModifierService } from './credit-indication-modifier/credit-indication-modifier.service';
import { Injectable } from '@angular/core';
import { CreditIndicationModifier } from './credit-indication-modifier/credit-indication-modifier';
import { ORProductService } from '../or-product/or-product.service';

@Injectable({
    providedIn: 'root'
})
export class CreditIndicationService {

    private tradeInProcessContainer: TradeInProcessContainer;
    private creditIndicationModifiers: CreditIndicationModifier[];

    // Maps database property names to TradeInProcessContainer property names
    private dict = {
        'Base': 'base',
        'Missing piece': 'missing',
        'Bent': 'bent',
        'Scratched': 'scratched',
        'Broken': 'broken'
    };

    constructor(private creditIndicationModifierService: CreditIndicationModifierService) { }

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
        for (const property of jewelryPiece.properties) {
            newPrice = property.price;
            if (property.value === this.tradeInProcessContainer.property) {
                newPrice = property.price;
                break;
            }
        }

        // Check if category matches, e.g. only 'Rings' modifiers should apply to a ring
        this.creditIndicationModifiers = this.creditIndicationModifiers.filter(function(modifier) {
            return modifier.category.name === category;
        });

        // Determine the value of the indication
        this.creditIndicationModifiers.forEach(creditIndicationModifier => {
            const criterionName = this.dict[creditIndicationModifier.criterion.name];
            // If the criterion name is 'base', determine the base price of the jewelry piece
            if (criterionName === 'base') {
                basePrice = this.round(newPrice * (creditIndicationModifier.effect / 100));
            } else if (this.tradeInProcessContainer[criterionName]) {
                // If the modifier is active, calculate the amount to modify the final price by
                modifiers.push(this.round((newPrice * (creditIndicationModifier.effect / 100))));
            }
        });

        // The indication is the base price minus the modifiers added up
        indication = this.round(basePrice - modifiers.reduce(this.getSum));

        console.log('-----Indication-----');
        console.log('New price: ' + newPrice);
        console.log('Base value: ' + basePrice);
        console.log('Modifier subtractions: ' + modifiers);
        console.log('Indication: ' + indication);

        return {
                indication: indication,
                newPrice: newPrice,
                basePrice: basePrice
        };
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
