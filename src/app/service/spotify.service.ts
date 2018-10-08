import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {spotify} from '../../environments/environment'

const TRACK_QUERY_TYPE = "track";


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(public httpClient: HttpClient) {
  }

  getTrack(id: string) {
    return this.query(`/tracks/${id}`);
  }

  searchTrack(query: string) {
    return this.search(query, TRACK_QUERY_TYPE);
  }

  search(query: string, queryType: string) {
    return this.query(`/search`, [
      `q=${query}`,
      `type=${queryType}`
    ]);
  }

  query(pathAction: string, params?: Array<string>) {

    let queryUrl = `${spotify.config.BASE_URL}${pathAction}`; //pathAction ~ /search

    if (params) {
      queryUrl += `?${params.join("&")}`
    }

    const options = {
      headers: {
        Authorization: `Bearer ${spotify.config.SPOTIFY_BEARER_TOKEN}`
      }
    };

    return this.httpClient.get(queryUrl, options);

  }
}
