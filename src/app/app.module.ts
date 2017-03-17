import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';

import { routing } from './app.routes';

import { SpotifyApiService } from './services/spotify-api.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SongService } from './services/song.service';
import { MusicListDataService } from './services/music-list-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    FavoritesComponent,
    ArtistComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
    //InMemoryWebApiModule.forRoot(MusicListDataService)
  ],
  providers: [SpotifyApiService, SongService],
  bootstrap: [AppComponent]
})
export class AppModule { }
