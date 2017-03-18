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
  isSaveActive: boolean = false;
  isCreateActive: boolean = false;
  errorMessage: boolean = false;

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.getSongs();
  }

  getSongs(): void {
    this.songService.getSongs().then(songs => this.songs = songs)
  }

  onSelect(song: Song): void {
    this.selectedSong = song;
    this.isSaveActive = true;
  }

  save(): void {
    this.songService.update(this.selectedSong);
    this.isSaveActive = false;
  }

  onCreate(): void {
    this.isCreateActive = true;
  }

  add(artist: string, title: string, album:string) {
    artist = artist.trim();
    title = title.trim();
    album = album.trim();
    if (!artist || !title || !album) {
      this.errorMessage = true;
      return;
    } else {
      this.songService.create(artist, title, album)
        .then(song => {
          this.songs.push(song);
        });
      this.isCreateActive = false;
    }
    
  }

}
