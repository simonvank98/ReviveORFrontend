import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TradeInRequestFinalizationComponent} from './trade-in-request-finalization.component';

describe('TradeInRequestFinalizationComponent', () => {
  let component: TradeInRequestFinalizationComponent;
  let fixture: ComponentFixture<TradeInRequestFinalizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeInRequestFinalizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeInRequestFinalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
