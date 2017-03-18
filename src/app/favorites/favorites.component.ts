import { SongService } from './../services/song.service';
import { Component, OnInit } from '@angular/core';
import { Song } from './../models/Song';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  songs: Song[];
  selectedSong: Song;

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.getSongs();
  }

  getSongs(): void {
    this.songService.getSongs().then(songs => this.songs = songs)
  }

  onSelect(song: Song): void {
    this.selectedSong = song;
  }

  save(){
    this.songService.update(this.selectedSong);
  }

}
