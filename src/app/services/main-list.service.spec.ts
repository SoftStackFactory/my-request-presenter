import { TestBed } from '@angular/core/testing';

import { MainListService } from './main-list.service';

describe('MainListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainListService = TestBed.get(MainListService);
    expect(service).toBeTruthy();
  });
});
