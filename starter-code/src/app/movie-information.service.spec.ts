import { TestBed, inject } from '@angular/core/testing';

import { MovieInformationService } from './movie-information.service';

describe('MovieInformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieInformationService]
    });
  });

  it('should be created', inject([MovieInformationService], (service: MovieInformationService) => {
    expect(service).toBeTruthy();
  }));
});
