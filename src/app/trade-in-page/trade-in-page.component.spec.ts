import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeInPageComponent } from './trade-in-page.component';

describe('TradeInPageComponent', () => {
  let component: TradeInPageComponent;
  let fixture: ComponentFixture<TradeInPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeInPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
