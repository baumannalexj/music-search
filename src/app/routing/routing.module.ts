import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from "../search/search.component";
import {AppComponent} from "../app.component";
import {ArtistComponent} from "../artist/artist.component";
import {TrackComponent} from "../track/track.component";
import {AlbumComponent} from "../album/album.component";

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'artists/:id', component: ArtistComponent},
  {path: 'albums/:id', component: AlbumComponent},
  {path: 'tracks/:id', component: TrackComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
