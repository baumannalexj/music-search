import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {SpotifyService} from "../../service/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string;
  results: Object;

  constructor(private spotifyService: SpotifyService,
              private router: Router,
              private route: ActivatedRoute) {

    this.route
      .queryParams
      .subscribe(params => {
        this.query = params['query'] || '';
      });

  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    console.log("the query:", this.query);
    if (!this.query) {
      return;
    }

    this.spotifyService
      .searchTrack(this.query)
      .subscribe((response: any) =>
        this.renderResults(response)
      )
    ;
  }

  renderResults(response: any): void {
    this.results = response
      && response.tracks
      && response.tracks.items
      || null;

    console.log(`results set to ${JSON.stringify(this.results)}`)

  }

  submit(query: string): void {
    this.router
      .navigate(['search'], {queryParams: {query: query}})
      .then(_ => this.search());
  }


}
