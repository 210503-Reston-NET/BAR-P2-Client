import { TestBed } from '@angular/core/testing';

import { ClubpostService } from './clubpost.service';

describe('ClubpostService', () => {
  let service: ClubpostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClubpostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
