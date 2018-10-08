import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../service/spotify.service";
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  private id: string;
  private track: Object;

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
      .getTrack(this.id)
      .subscribe(response => this.renderTrack(response));
  }

  renderTrack(response: any): void {
    this.track = response;

    console.log(`results set to ${JSON.stringify(this.track)}`)
  }

}
