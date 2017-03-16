import { Component, OnInit } from '@angular/core';
import { SpotifyApiService } from './../spotify-api.service';
import { Album } from './../../../Album';
import { Artist } from './../../../Artist';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  id: string;
  album: Album[];

  constructor(private spotifyService: SpotifyApiService, private route: ActivatedRoute) { }

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

}
