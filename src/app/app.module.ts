import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
// import {LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common'

import {AppComponent} from './app.component';
import {SearchComponent} from "./component/search/search.component";
import {BeersComponent} from "./component/beers/beers.component";
import {ArtistComponent} from "./component/artist/artist.component";
import {AlbumComponent} from "./component/album/album.component";
import {TrackComponent} from "./component/track/track.component";
import {RoutingModule} from "./routing/routing.module";
import {SpotifyService} from "./service/spotify.service";


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent,
    TrackComponent,
    BeersComponent
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
