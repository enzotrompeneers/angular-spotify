import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';


const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'artist/:id', component:ArtistComponent},
  {path: 'album/:id', component:AlbumComponent}
];

export const routing = RouterModule.forRoot(routes);