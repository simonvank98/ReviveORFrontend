import { ORProduct } from 'src/app/shared/services/or-product/or-product.model';

export interface TradeInProcessContainer {
    currentStep: number;
    jewelryType: string;
    jewelryMaterial: string;
    jewelryPiece: ORProduct;
    estimatedCredit: number;
    property: string;
    missing: boolean;
    scratched: boolean;
    bent: boolean;
    broken: boolean;
}
