import { TestBed, inject } from '@angular/core/testing';

import { DatahandleService } from './datahandle.service';

describe('DatahandleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatahandleService]
    });
  });

  it('should be created', inject([DatahandleService], (service: DatahandleService) => {
    expect(service).toBeTruthy();
  }));
});
