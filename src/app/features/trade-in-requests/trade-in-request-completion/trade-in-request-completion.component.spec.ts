import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeInRequestCompletionComponent } from './trade-in-request-completion.component';

describe('TradeInRequestCompletionComponent', () => {
  let component: TradeInRequestCompletionComponent;
  let fixture: ComponentFixture<TradeInRequestCompletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeInRequestCompletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeInRequestCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
