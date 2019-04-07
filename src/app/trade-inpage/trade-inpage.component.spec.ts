import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeInpageComponent } from './trade-inpage.component';

describe('TradeInpageComponent', () => {
  let component: TradeInpageComponent;
  let fixture: ComponentFixture<TradeInpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeInpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeInpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
