import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Song } from './../models/Song';
//import { SONGS } from './../models/mock-songs'; // local


@Injectable()
export class SongService {
  private songsUrl = 'api/songs';
  private headers = new Headers({'Content-Type' : 'application/json'});

  private handleError(error:any): Promise <any> {
    console.error(error);
    return Promise.reject(error.message);
  }

  constructor(private http: Http) { }

  /*
  getSongs():Promise<Song[]> {
    return Promise.resolve(SONGS);
  }
  */

  getSongs():Promise<Song[]> {
    return this.http.get(this.songsUrl)
      .toPromise()
      .then(res => res.json().data as Song[])
      .catch(this.handleError);
  }

  update(song: Song): Promise<Song> {

    console.log("test");
    const url = `${this.songsUrl}/${song.id}`;
    return this.http.put(url, JSON.stringify(song))
      .toPromise()
      .then(() => song)
      .catch(this.handleError);

  }

}
