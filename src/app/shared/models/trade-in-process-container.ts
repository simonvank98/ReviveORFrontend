import { ORProduct } from './or-product';

export interface TradeInProcessContainer {
    jewelryType: string;
    jewelryMaterial: string;
    jewelryPiece: ORProduct;
    property: string;
    missing: boolean;
    scratched: boolean;
    bent: boolean;
    broken: boolean;
}
