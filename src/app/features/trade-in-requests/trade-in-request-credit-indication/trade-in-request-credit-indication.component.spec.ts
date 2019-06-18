import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TradeInRequestCreditIndicationComponent} from './trade-in-request-credit-indication.component';

describe('TradeInRequestCreditIndicationComponent', () => {
  let component: TradeInRequestCreditIndicationComponent;
  let fixture: ComponentFixture<TradeInRequestCreditIndicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeInRequestCreditIndicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeInRequestCreditIndicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
