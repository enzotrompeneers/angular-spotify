import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { LoadingComponent } from './loading/loading.component';


const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'favorites/:id', component: FavoritesComponent},
  {path: 'artist/:id', component:ArtistComponent},
  {path: 'album/:id', component:AlbumComponent},
  {path: 'loading', component: LoadingComponent},
];

export const routing = RouterModule.forRoot(routes);