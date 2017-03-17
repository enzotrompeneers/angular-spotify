import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';

import { routing } from './app.routes';
import { FavoritesComponent } from './favorites/favorites.component';

import { SpotifyApiService } from './services/spotify-api.service';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
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
    routing,
    //InMemoryWebApiModule.forRoot(MusicListDataService)
  ],
  providers: [SpotifyApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
