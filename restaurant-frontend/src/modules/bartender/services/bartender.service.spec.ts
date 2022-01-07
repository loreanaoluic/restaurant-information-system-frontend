import { TestBed } from '@angular/core/testing';

import { BartenderService } from './bartender.service';

describe('BartenderService', () => {
  let service: BartenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BartenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
