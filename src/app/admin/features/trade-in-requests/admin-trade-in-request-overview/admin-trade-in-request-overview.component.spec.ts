import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminTradeInRequestOverviewComponent} from './admin-trade-in-request-overview.component';

describe('AdminTradeInRequestOverviewComponent', () => {
  let component: AdminTradeInRequestOverviewComponent;
  let fixture: ComponentFixture<AdminTradeInRequestOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTradeInRequestOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTradeInRequestOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
