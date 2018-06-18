import { TestBed, inject } from '@angular/core/testing';

import { TmdbMoviesService } from './tmdb-movies.service';

describe('TmdbMoviesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TmdbMoviesService]
    });
  });

  it('should be created', inject([TmdbMoviesService], (service: TmdbMoviesService) => {
    expect(service).toBeTruthy();
  }));
});
