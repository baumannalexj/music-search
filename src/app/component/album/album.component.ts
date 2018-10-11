import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../service/spotify.service";
import {Router, ActivatedRoute} from '@angular/router';
import {OnDestroy} from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit, OnDestroy {

  private id: string;
  private album: Object;

  constructor(private spotifyService: SpotifyService,
              private router: Router,
              private route: ActivatedRoute) {

    this.route
      .params
      .subscribe(params => {
        this.id = params['id'] || '';
      });

  }

  ngOnInit() {
    this.spotifyService
      .getAlbum(this.id)
      .subscribe(response => this.renderAlbum(response));
  }

  ngOnDestroy(): void {
    //unsubscribe
  }

  renderAlbum(response: any): void {
    this.album = response;

    console.log(`results set to ${JSON.stringify(this.album)}`)
  }

}
