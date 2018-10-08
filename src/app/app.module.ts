import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router'
import {LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common'

import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {ArtistComponent} from './artist/artist.component';
import {AlbumComponent} from './album/album.component';
import {TrackComponent} from './track/track.component';
import {RoutingModule} from "./routing/routing.module";
import {SpotifyService} from "./service/spotify.service";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
