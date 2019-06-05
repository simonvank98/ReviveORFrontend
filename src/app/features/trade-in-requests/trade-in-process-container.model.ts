import {ORProduct} from 'src/app/shared/services/or-product/or-product.model';
import {TradeInRequestImageModel} from '../../shared/services/trade-in/models/trade-in-request-image.model';

export interface TradeInProcessContainer {
    currentStep: number;
    estimatedCredit: number;
    jewelryType: string;
    jewelryMaterial: string;
    jewelryPiece: ORProduct;
    selectedProperty: string;
    storyTitle: string;
    storyContent: string;
    additionalNotes: string;
    images: TradeInRequestImageModel[];

    jewelryCondition: {
        missingPiece: boolean;
        scratched: boolean;
        bent: boolean;
        broken: boolean;
    };
}
