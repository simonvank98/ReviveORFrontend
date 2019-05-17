import {TradeInProcessContainer} from '../../../features/trade-in-requests/trade-in-process-container.model';
import {CreditIndicationModifierService} from './credit-indication-modifier/credit-indication-modifier.service';
import {Injectable} from '@angular/core';
import {CreditIndicationModifier} from './credit-indication-modifier/credit-indication-modifier';
import {CommonMath} from '../../utilities/common-math';
import {ORProduct} from '../or-product/or-product.model';

@Injectable({
    providedIn: 'root'
})
export class CreditIndicationService {

    // Maps API property names to TradeInProcessContainer property names
    private criteriaDict = {
        'Base': 'base',
        'Missing piece': 'missing',
        'Bent': 'bent',
        'Scratched': 'scratched',
        'Broken': 'broken'
    };

    constructor(private creditIndicationModifierService: CreditIndicationModifierService) {
    }

    // Gets the current price indication of a trade in request using a TradeInProcessContainer
    public getIndication(tradeInProcessContainer: TradeInProcessContainer): Promise<{}> {
        return new Promise<{}>(resolve => {
            // API call to get the credit indication modifiers
            this.creditIndicationModifierService.getByCategory(tradeInProcessContainer.jewelryPiece.category.name).subscribe(creditIndicationModifiers => {
                // Resolves the promise with a price indication number
                resolve(this.calculateCreditIndication(tradeInProcessContainer, creditIndicationModifiers));
            });
        });
    }

    private calculateCreditIndication(tradeInProcessContainer: TradeInProcessContainer, creditIndicationModifiers: CreditIndicationModifier[]): {} {
        const newPrice = this.getJewelryNewPriceBySelectedProperty(tradeInProcessContainer.jewelryPiece, tradeInProcessContainer.property);
        const basePrice = this.calculateJewelryBasePrice(newPrice, creditIndicationModifiers);
        const totalPenalty = Math.round(this.calculateTotalJewelryConditionPenalty(basePrice, tradeInProcessContainer, creditIndicationModifiers));
        const indication = CommonMath.roundTo2Decimals(basePrice - totalPenalty);
        this.logIndicationValues(newPrice, basePrice, totalPenalty, indication);

        return {
            indication: indication,
            newPrice: newPrice,
            basePrice: basePrice
        };
    }

    private calculateJewelryBasePrice(newPrice, creditIndicationModifiers: CreditIndicationModifier[]) {
        let basePrice = 0;
        for (const modifier of creditIndicationModifiers) {
            const criterionName = this.criteriaDict[modifier.criterion.name];
            if (criterionName === 'base') {
                basePrice = CommonMath.roundTo2Decimals(newPrice * (modifier.effect / 100));
                break;
            }
        }
        return basePrice;
    }

    private calculateTotalJewelryConditionPenalty(basePrice, tradeInProcessContainer: TradeInProcessContainer, creditIndicationModifiers: CreditIndicationModifier[]) {
        const penaltyEffects = [];
        for (const modifier of creditIndicationModifiers) {
            const criterionName = this.criteriaDict[modifier.criterion.name];
            if (tradeInProcessContainer[criterionName]) {
                // If the modifier is active, calculate the amount to modify the final price by
                penaltyEffects.push(CommonMath.roundTo2Decimals((basePrice * (modifier.effect / 100))));
            }
        }
        return CommonMath.findSumOfNumbers(penaltyEffects);
    }

    private getJewelryNewPriceBySelectedProperty(jewelryPiece: ORProduct, selectedProperty: String) {
        let newPrice = jewelryPiece.properties[0].price; // default price to the first property

        for (const property of jewelryPiece.properties) {
            if (property.value === selectedProperty) {
                newPrice = property.price;
                break;
            }
        }
        return newPrice;
    }

    private logIndicationValues(newPrice, basePrice, totalPenalty, indication) {
        console.log('-----Indication-----');
        console.log('New price:', newPrice);
        console.log('Base value:', basePrice);
        console.log('Total penalty:', totalPenalty);
        console.log('Indication: ', indication);
        console.log('-------------------');
    }
}
