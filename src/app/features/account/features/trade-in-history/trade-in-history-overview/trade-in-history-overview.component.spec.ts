import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TradeInHistoryOverviewComponent} from './trade-in-history-overview.component';

describe('TradeInHistoryOverviewComponent', () => {
  let component: TradeInHistoryOverviewComponent;
  let fixture: ComponentFixture<TradeInHistoryOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeInHistoryOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeInHistoryOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
