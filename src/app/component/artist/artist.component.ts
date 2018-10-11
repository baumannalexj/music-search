import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../service/spotify.service";
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  private id: string;
  private artist: Object;

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
      .getArtist(this.id)
      .subscribe(response => this.renderAlbum(response));
  }

  renderAlbum(response: any): void {
    this.artist = response;

    console.log(`results set to ${JSON.stringify(this.artist)}`)
  }

}
