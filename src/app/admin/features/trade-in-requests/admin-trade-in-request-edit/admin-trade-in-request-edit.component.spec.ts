import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminTradeInRequestEditComponent} from './admin-trade-in-request-edit.component';

describe('AdminTradeInRequestEditComponent', () => {
  let component: AdminTradeInRequestEditComponent;
  let fixture: ComponentFixture<AdminTradeInRequestEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTradeInRequestEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTradeInRequestEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
