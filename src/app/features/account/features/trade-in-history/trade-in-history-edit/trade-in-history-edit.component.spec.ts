import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeInHistoryEditComponent } from './trade-in-history-edit.component';

describe('TradeInHistoryEditComponent', () => {
  let component: TradeInHistoryEditComponent;
  let fixture: ComponentFixture<TradeInHistoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeInHistoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeInHistoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
