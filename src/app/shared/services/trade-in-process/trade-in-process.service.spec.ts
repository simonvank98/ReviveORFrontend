/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TradeInProcessService } from './trade-in-process.service';

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
