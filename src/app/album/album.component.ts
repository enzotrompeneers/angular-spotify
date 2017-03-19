import { SpotifyApiService } from './../services/spotify-api.service';
import { Album } from './../models/Album';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { SongService } from './../services/song.service';
import { Song } from './../models/Song';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  songs: Song[];
  id: string;
  album: Album[];

  constructor(private spotifyService: SpotifyApiService, private route: ActivatedRoute, private songService: SongService) { }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.spotifyService.getAlbum(id)
          .subscribe(album => {
            this.album = album;
          })
      })
  }

  add(artist: string, title: string, album:string) {
    this.songService.create(artist, title, album)
        .then(song => {
          this.songs.push(song);
        });
    }};
