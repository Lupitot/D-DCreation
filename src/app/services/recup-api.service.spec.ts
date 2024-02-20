import { TestBed } from '@angular/core/testing';

import { RecupapiService  } from './recup-api.service';

describe('RecupApiService', () => {
  let service: RecupapiService ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecupapiService );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
