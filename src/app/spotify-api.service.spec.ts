/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpotifyApiService } from './spotify-api.service';

describe('SpotifyApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotifyApiService]
    });
  });

  it('should ...', inject([SpotifyApiService], (service: SpotifyApiService) => {
    expect(service).toBeTruthy();
  }));
});
