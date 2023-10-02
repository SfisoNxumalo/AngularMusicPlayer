import { TestBed } from '@angular/core/testing';

import { PassSongServiceService } from './pass-song-service.service';

describe('PassSongServiceService', () => {
  let service: PassSongServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassSongServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
