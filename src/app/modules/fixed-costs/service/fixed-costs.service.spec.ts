import { TestBed } from '@angular/core/testing';

import { FixedCostsService } from './fixed-costs.service';

describe('FixedCostsService', () => {
  let service: FixedCostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FixedCostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
