import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router'
import {LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common'

import { AppComponent } from './app.component';
import { AlbumComponentComponent } from './album-component/album-component.component';
import { ArtistComponentComponent } from './artist-component/artist-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponentComponent,
    ArtistComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
