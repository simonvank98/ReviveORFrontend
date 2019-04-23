/* tslint:disable:no-unused-variable */

import {inject, TestBed} from '@angular/core/testing';
import {TradeInProcessService} from './trade-in-process.service';

describe('Service: TradeInProcess', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TradeInProcessService]
    });
  });

  it('should ...', inject([TradeInProcessService], (service: TradeInProcessService) => {
    expect(service).toBeTruthy();
  }));
});
