import { TestBed } from '@angular/core/testing';

import { CreditIndicationService } from './credit-indication.service';

describe('CreditIndicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreditIndicationService = TestBed.get(CreditIndicationService);
    expect(service).toBeTruthy();
  });
});
