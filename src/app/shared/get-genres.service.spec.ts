import { TestBed } from '@angular/core/testing';

import { GetGenresService } from './get-genres.service';

describe('GetGenresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetGenresService = TestBed.get(GetGenresService);
    expect(service).toBeTruthy();
  });
});
