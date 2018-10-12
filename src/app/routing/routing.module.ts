import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "../app.component";
import {BeersComponent} from "../component/beers/beers.component";
import {SearchComponent} from "../component/search/search.component";
import {ArtistComponent} from "../component/artist/artist.component";
import {AlbumComponent} from "../component/album/album.component";
import {TrackComponent} from "../component/track/track.component";

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'beers', component: BeersComponent},
  {path: 'beers/:id', component: BeersComponent},
  {path: 'artists/:id', component: ArtistComponent},
  {path: 'albums/:id', component: AlbumComponent},
  {path: 'tracks/:id', component: TrackComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
