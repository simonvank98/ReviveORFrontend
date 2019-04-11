import {TradeInRequestJewelryTypeModel} from './trade-in-request-jewelry-type.model';
import {TradeInRequestImageModel} from './trade-in-request-image.model';
import {Moment} from 'moment';
import {UserModel} from './user.model';

export interface TradeInRequestModel {
  requestId: number;
  userId: number;
  status: string;
  estimatedCredit: number;
  dateCreated: Date;
  dateUpdated: Date;
  jewelryName: string;
  jewelrySize: string;
  additionalDescription: string;
  storyTitle: string;
  storyContent: string;
  tradeInRequestsImage: TradeInRequestImageModel;
  tradeInRequestsJewelryType: TradeInRequestJewelryTypeModel;
  user: UserModel;
}
