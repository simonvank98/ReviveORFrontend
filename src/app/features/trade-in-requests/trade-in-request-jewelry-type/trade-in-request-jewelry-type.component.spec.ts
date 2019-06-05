/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TradeInRequestJewelryTypeComponent} from './trade-in-request-jewelry-type.component';

describe('TradeInRequestJewelryTypeComponent', () => {
  let component: TradeInRequestJewelryTypeComponent;
  let fixture: ComponentFixture<TradeInRequestJewelryTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeInRequestJewelryTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeInRequestJewelryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
