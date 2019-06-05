/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TradeInRequestJewelrySelectionComponent} from './trade-in-request-jewelry-piece.component';

describe('TradeInRequestJewelryPieceComponent', () => {
  let component: TradeInRequestJewelrySelectionComponent;
  let fixture: ComponentFixture<TradeInRequestJewelrySelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeInRequestJewelrySelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeInRequestJewelrySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
