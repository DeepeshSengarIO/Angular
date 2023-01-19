import { TestBed } from '@angular/core/testing';

import { GetMaxService } from './get-max.service';

describe('GetMaxService', () => {
  let service: GetMaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
