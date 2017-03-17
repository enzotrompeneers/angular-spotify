import { Component, OnInit } from '@angular/core';
import { Song } from './../models/Song';

const SONGS: Song[] = [
  {id: 1, artist: 'David Guetta'},
  {id: 2, artist: 'Whiz Khalifa'}
];

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  songs: Song[] = SONGS;
  constructor() { }

  ngOnInit() {
  }

}
