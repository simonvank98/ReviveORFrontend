/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TradeInRequestJewelryMaterialComponent} from './trade-in-request-jewelry-material.component';

describe('TradeInRequestJewelryMaterialComponent', () => {
  let component: TradeInRequestJewelryMaterialComponent;
  let fixture: ComponentFixture<TradeInRequestJewelryMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeInRequestJewelryMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeInRequestJewelryMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
