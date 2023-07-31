import { TestBed } from '@angular/core/testing';

import { SPersonService } from './s-person.service';

describe('SPersonService', () => {
  let service: SPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SPersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
