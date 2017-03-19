import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyApiService {
  private baseUrl: string;
  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
  private albumUrl: string;

  constructor(private http: Http) {
    this.baseUrl = "https://api.spotify.com/v1/";
  }

  SearchMusic(str: string, type='artist'): Observable<any> {
    console.log(str);
    this.searchUrl = this.baseUrl+'search?query='+str+'&offset=0&limit=20&type='+type+'&market=BE';
    return this.http.get(this.searchUrl)
      .map(res => res.json());
  }

  getArtist(id: string): Observable<any> {
    this.artistUrl = this.baseUrl+'artists/'+id;
    return this.http.get(this.artistUrl)
      .map(res => res.json());
  }
  getAlbums(artistId: string): Observable<any> {
    this.albumsUrl = this.baseUrl+'artists/'+artistId+'/albums';
    return this.http.get(this.albumsUrl)
      .map(res => res.json());
  }
  getAlbum(id: string): Observable<any>  {
    this.albumUrl = this.baseUrl+'albums/'+id;
    return this.http.get(this.albumUrl)
      .map(res => res.json());
  }

}
