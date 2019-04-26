import { TradeInProcessContainer } from './../models/trade-in-process-container';
import { Injectable } from '@angular/core';
import { ORProduct } from '../models/or-product';

@Injectable({
  providedIn: 'root'
})
export class TradeInProcessService {

  emptyContainer;
  tradeInProcessContainer: TradeInProcessContainer = {
    jewelryType: '',
    jewelryMaterial: '',
    jewelryPiece: {}
  };

  constructor() {
    this.emptyContainer = JSON.parse(JSON.stringify(this.tradeInProcessContainer));
    localStorage.emptyContainer = JSON.stringify(this.emptyContainer);
  }

  hasType() {
    return this.tradeInProcessContainer.jewelryType.length > 0;
  }

  getType() {
    return this.tradeInProcessContainer.jewelryType;
  }

  setType(type: string) {
    this.tradeInProcessContainer.jewelryType = type;
    this.storeContainer();
  }

  hasMaterial() {
    return this.tradeInProcessContainer.jewelryMaterial.length > 0;
  }

  getMaterial() {
    return this.tradeInProcessContainer.jewelryMaterial;
  }

  setMaterial(material: string) {
    this.tradeInProcessContainer.jewelryMaterial = material;
    this.storeContainer();
  }

  hasPiece() {
    return Object.entries(this.tradeInProcessContainer.jewelryPiece).length !== 0 && 
                          this.tradeInProcessContainer.jewelryPiece.constructor === Object;
  }

  getPiece() {
    return this.tradeInProcessContainer.jewelryPiece;
  }

  setPiece(piece: ORProduct) {
    this.tradeInProcessContainer.jewelryPiece = piece;
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
