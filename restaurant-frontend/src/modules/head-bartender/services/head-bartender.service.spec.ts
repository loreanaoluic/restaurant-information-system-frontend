import { TestBed } from '@angular/core/testing';

import { HeadBartenderService } from './head-bartender.service';

describe('HeadBartenderService', () => {
  let service: HeadBartenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadBartenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
