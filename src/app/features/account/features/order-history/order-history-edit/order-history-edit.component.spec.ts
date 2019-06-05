import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHistoryEditComponent } from './order-history-edit.component';

describe('OrderHistoryEditComponent', () => {
  let component: OrderHistoryEditComponent;
  let fixture: ComponentFixture<OrderHistoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderHistoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderHistoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
