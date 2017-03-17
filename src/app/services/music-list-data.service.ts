import { Injectable } from '@angular/core';
import {MusicList} from './../models/music-list';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class MusicListDataService implements InMemoryDbService {

  constructor() {}

    createDb() {
      let songs = [
        {id:1, artist:'david guetta', title:'my way'},
        {id:1, artist:'whiz khalifa', title:'mirrors on the wall'},
      ];
      return songs;
    }


}
