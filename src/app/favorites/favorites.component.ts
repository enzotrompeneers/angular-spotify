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
  editErrorMessage: boolean = false;
  errorMessage: boolean = false;
  warningMessage: boolean = false;

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.getSongs();
  }

  getSongs(): void {
    this.songService.getSongs().then(songs => this.songs = songs)
  }

  onSelect(song: Song): void { // update window
    this.selectedSong = song;
    this.isSaveActive = true;
  }

  save(artist: string, title: string, album:string) { // saving the update
    artist = artist.trim();
    title = title.trim();
    album = album.trim();
    if (!this.selectedSong.album) {
        this.selectedSong.album = "none"
      }

    if (!artist || !title) {
      this.editErrorMessage = true;
      return;
    } else {
      this.songService.update(this.selectedSong);
      this.isSaveActive = false;
      this.editErrorMessage = false;
    }
  }

  onCreate(): void { // create window
    this.isCreateActive = true;
  }

  add(artist: string, title: string, album:string) { // saving the create
    artist = artist.trim();
    title = title.trim();
    album = album.trim();
    if (!album) {
        album = "none"
      }
    if (!artist || !title || !album) {
      this.errorMessage = true;
      return;
    } else {
      
      this.songService.create(artist, title, album)
        .then(song => {
          this.songs.push(song);
        });
      //this.isCreateActive = false;
      this.errorMessage = false;
      this.isCreateActive = false; // animation uitgezet
    }
  }

  onDelete(song: Song): void { // delete window
    this.warningMessage = true;
    this.selectedSong = song;
  }
  disableDelete(): void { // disable delete window
    this.warningMessage = false;
  }
  delete(song: Song): void {
    this.songService.delete(song.id)
    .then(() => {
      this.songs = this.songs.filter(s => s !== song)
      if (this.selectedSong === song) {
        this.selectedSong = null;
      }
    });
    this.warningMessage = false;
  }

}
