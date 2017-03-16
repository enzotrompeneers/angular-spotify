import { Component, OnInit } from '@angular/core';
import { SpotifyApiService } from './../spotify-api.service';
import { Album } from './../../../Album';
import { Artist } from './../../../Artist';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Artist[];
  albums: Album[];

  constructor(private spotifyService: SpotifyApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.spotifyService.getArtist(id)
          .subscribe(artist => {
            this.artist = artist;
          })
        this.spotifyService.getAlbums(id)
        .subscribe(albums => {
          this.albums = albums.items;
        })
          
      })
  }

}
