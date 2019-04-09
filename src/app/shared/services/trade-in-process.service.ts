import { TradeInProcessContainer } from './../models/trade-in-process-container';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TradeInProcessService {
  tradeInProcessContainer: TradeInProcessContainer = {
    jewelryType: '',
    jewelryMaterial: '',
    jewelryModel: ''
  };

  constructor() {
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

  private storeContainer() {
    localStorage.tradeInProcessContainer = JSON.stringify(this.tradeInProcessContainer);
  }
}
