import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeInRequestJewelryConditionComponent } from './trade-in-request-jewelry-condition.component';

describe('TradeInRequestJewelryConditionComponent', () => {
  let component: TradeInRequestJewelryConditionComponent;
  let fixture: ComponentFixture<TradeInRequestJewelryConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeInRequestJewelryConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeInRequestJewelryConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
