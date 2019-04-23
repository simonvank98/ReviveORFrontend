import {TradeInProcessContainerModel} from './trade-in-process-container.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TradeInProcessService {

  emptyContainer;
  tradeInProcessContainer: TradeInProcessContainerModel = {
    currentScreen: 0,
    jewelryType: '',
    jewelryMaterial: '',
    jewelryModel: {}
  };

  constructor() {
    this.emptyContainer = JSON.parse(JSON.stringify(this.tradeInProcessContainer));
  }

  stepForwards() {
    this.tradeInProcessContainer.currentScreen += 1;
  }

  stepBackwards() {
      if (this.tradeInProcessContainer.currentScreen >= 0) {
        this.tradeInProcessContainer.currentScreen -= 1;
      }
  }

  setType(type: string) {
    this.tradeInProcessContainer.jewelryType = type;
    this.storeContainer();
  }

  setMaterial(material: string) {
    this.tradeInProcessContainer.jewelryMaterial = material;
    this.storeContainer();
  }

  setModel(model: any) { // TradeInRequestModel
    this.tradeInProcessContainer.jewelryModel = model;
    this.storeContainer();
  }

  reset() {
    this.tradeInProcessContainer = this.emptyContainer;
    localStorage.removeItem('tradeInProcessContainer');
  }

  private storeContainer() {
    localStorage.tradeInProcessContainer = JSON.stringify(this.tradeInProcessContainer);
  }
}
