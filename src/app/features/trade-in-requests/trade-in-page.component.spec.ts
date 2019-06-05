import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TradeInRequestPageComponent} from './trade-in-request-page.component';

describe('TradeInRequestPageComponent', () => {
  let component: TradeInRequestPageComponent;
  let fixture: ComponentFixture<TradeInRequestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeInRequestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeInRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
