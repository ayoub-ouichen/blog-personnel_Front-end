import { TestBed } from '@angular/core/testing';

import { SJwtIntercepteurService } from './s-jwt-intercepteur.service';

describe('SJwtIntercepteurService', () => {
  let service: SJwtIntercepteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SJwtIntercepteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
