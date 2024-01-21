import { TestBed } from '@angular/core/testing';

import { MyFirstRestService } from './my-first-rest.service';

describe('MyFirstRestService', () => {
  let service: MyFirstRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFirstRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
