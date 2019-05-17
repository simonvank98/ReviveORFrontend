/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TradeInRequestJewelryPieceComponent } from './trade-in-request-jewelry-piece.component';

describe('TradeInRequestJewelryPieceComponent', () => {
  let component: TradeInRequestJewelryPieceComponent;
  let fixture: ComponentFixture<TradeInRequestJewelryPieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeInRequestJewelryPieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeInRequestJewelryPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
