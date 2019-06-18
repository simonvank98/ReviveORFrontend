import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderHistoryOverviewComponent} from './order-history-overview.component';

describe('OrderHistoryOverviewComponent', () => {
  let component: OrderHistoryOverviewComponent;
  let fixture: ComponentFixture<OrderHistoryOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderHistoryOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderHistoryOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
