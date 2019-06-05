import {TradeInRequestJewelryConditionModel} from './trade-in-request-jewelry-condition.model';
import {TradeInRequestImageModel} from './trade-in-request-image.model';
import {UserModel} from '../../user/user.model';

export interface TradeInRequestModel {
    id: number;
    userId: number;
    status: string;
    estimatedCredit: number;
    jewelryName: string;
    selectedProperty: string;
    additionalNotes: string;
    storyTitle: string;
    storyContent: string;
    images: TradeInRequestImageModel[];
    jewelryCondition: TradeInRequestJewelryConditionModel;
    createdAt?: Date;
    updatedAt?: Date;
    user?: UserModel;
}
