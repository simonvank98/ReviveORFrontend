import {TradeInRequestJewelryConditionModel} from './trade-in-request-jewelry-condition.model';
import {TradeInRequestImageModel} from './trade-in-request-image.model';
import {UserModel} from '../../user/user.model';

export interface TradeInRequestModel {
    id: number;
    userId: number;
    status: string;
    jewelryName: string;
    jewelryType: string;
    material: String;
    selectedProperty: string;
    storyTitle: string;
    storyContent: string;
    images: TradeInRequestImageModel[];
    jewelryCondition: TradeInRequestJewelryConditionModel;
    estimatedCredit: number;
    additionalNotes: string;
    messageToCustomer?: string;
    finalCredit?: number;
    createdAt?: Date;
    updatedAt?: Date;
    user?: UserModel;
    addToProducts?: boolean;
}
