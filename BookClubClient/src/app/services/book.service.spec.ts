import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;
  let mockbook: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
    mockbook = {
      id: 100,
      name: 'Erin Dee',
      email: 'edee@example.com'
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });




});
