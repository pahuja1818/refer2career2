import { TestBed } from '@angular/core/testing';

import { CommonCurrencyCodesService } from './common-currency-codes.service';

describe('CommonCurrencyCodesService', () => {
  let service: CommonCurrencyCodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonCurrencyCodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
