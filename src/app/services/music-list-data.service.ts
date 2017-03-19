import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class MusicListDataService implements InMemoryDbService {

  constructor() {}

    createDb() {
      let songs = [
        {id: 1, artist: 'Michael Jackson', title: 'Love Never Felt so Good', album: 'XSCAPE'},
        {id: 2, artist: 'Barry White	', title: 'Loves theme', album: 'All Time Greatest Hits	edit	delete'},
        {id: 3, artist: 'Rihanna', title: 'Consideration', album: 'ANTI'},
        {id: 4, artist: 'Tourist LeMC', title: 'En Route', album: 'En Route (Deluxe)'}
      ];
      return {songs};
    }
}
