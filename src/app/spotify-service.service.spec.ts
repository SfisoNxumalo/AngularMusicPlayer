import { TestBed } from '@angular/core/testing';

import { SpotifyServiceService } from './spotify-service.service';

describe('SpotifyServiceService', () => {
  let service: SpotifyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
