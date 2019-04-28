import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeInRequestOverviewComponent } from './trade-in-request-overview.component';

describe('TradeInRequestOverviewComponent', () => {
  let component: TradeInRequestOverviewComponent;
  let fixture: ComponentFixture<TradeInRequestOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeInRequestOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeInRequestOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
