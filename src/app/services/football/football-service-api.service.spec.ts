import { TestBed } from '@angular/core/testing';

import { FootballServiceApiService } from './football-service-api.service';

describe('FootballServiceApiService', () => {
  let service: FootballServiceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootballServiceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
