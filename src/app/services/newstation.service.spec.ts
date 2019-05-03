import { TestBed } from '@angular/core/testing';

import { NewstationService } from './newstation.service';

describe('NewstationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewstationService = TestBed.get(NewstationService);
    expect(service).toBeTruthy();
  });
});
