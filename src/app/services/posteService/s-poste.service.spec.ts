import { TestBed } from '@angular/core/testing';

import { SPosteService } from './s-poste.service';

describe('SPosteService', () => {
  let service: SPosteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SPosteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
