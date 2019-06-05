import {TestBed} from '@angular/core/testing';

import {CreditIndicationModifierService} from './credit-indication-modifier.service';

describe('CreditIndicationModifierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreditIndicationModifierService = TestBed.get(CreditIndicationModifierService);
    expect(service).toBeTruthy();
  });
});
