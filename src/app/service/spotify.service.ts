import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {spotify} from '../../environments/environment'
const TRACK_TYPE = "track";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(public httpClient: HttpClient) {
  }


  searchTrack(query: string) {
    let queryParams: string = [

      `q=${query}`,
      `type=${TRACK_TYPE}`

    ].join("&");

    let queryUrl: string = `https://api.spotify.com/v1/search?${queryParams}`;

    let options = {
      headers: {
        Authorization: `Bearer ${spotify.config.SPOTIFY_BEARER_TOKEN}`
      }
    };


    let response = this.httpClient.get(queryUrl, options);

    return response;
  }
}
