import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class MusicListDataService implements InMemoryDbService {

  constructor() {}

    createDb() {
      let songs = [
        {id: 1, artist: 'Elton John', title: 'mirrors', album: 'dunno'},
        {id: 2, artist: 'Whiz Khalifa', title: 'testing', album: 'new wave'},
        {id: 3, artist: 'Whiz Khalifa', title: 'testing', album: 'new wave'},
        {id: 4, artist: 'Whiz Khalifa', title: 'testing', album: 'new wave'}
      ];
      return {songs};
    }
}
