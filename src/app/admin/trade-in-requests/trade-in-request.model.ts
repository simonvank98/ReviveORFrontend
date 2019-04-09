import {TradeInRequestJewelryTypeModel} from './trade-in-request-jewelry-type.model';
import {TradeInRequestImageModel} from './trade-in-request-image.model';
import {Moment} from 'moment';

export interface TradeInRequestModel {
  requestId: number;
  userId: number;
  status: string;
  dateCreated: Date;
  dateUpdated: Date;
  jewelryName: string;
  jewelrySize: string;
  jewelryDescription: string;
  storyTitle: string;
  storyContent: string;
  tradeInRequestsImage: TradeInRequestImageModel;
  tradeInRequestsJewelryType: TradeInRequestJewelryTypeModel;
}
