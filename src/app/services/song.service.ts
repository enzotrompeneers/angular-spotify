import { Injectable } from '@angular/core';

import { Song } from './../models/Song';
import { SONGS } from './../models/mock-songs';


@Injectable()
export class SongService {

  constructor() { }

  getSongs():Promise<Song[]> {
    return Promise.resolve(SONGS);
  }

}
