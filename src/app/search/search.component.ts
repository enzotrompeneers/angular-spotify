import { Component, OnInit } from '@angular/core';
import { SpotifyApiService } from './../services/spotify-api.service';
import { Artist } from './../models/Artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchStr:string;
  searchRes: Artist[];
  
  constructor(private spotifyService: SpotifyApiService) {}

  SearchMusic() { 
    this.spotifyService.SearchMusic(this.searchStr)
      .subscribe(res => {
        this.searchRes = res.artists.items;
      })
  }
  
  ngOnInit() {
  }
}
