/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MusicListDataService } from './music-list-data.service';

describe('MusicListDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicListDataService]
    });
  });

  it('should ...', inject([MusicListDataService], (service: MusicListDataService) => {
    expect(service).toBeTruthy();
  }));
});
