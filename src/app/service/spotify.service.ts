import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {SpotifyConfig} from '../../environments/environment';
import {SpotifyAPIKey} from '../../environments/spotifyApiKey';

const TRACK_QUERY_TYPE = "track";


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(public httpClient: HttpClient) {
  }

  getArtist(id: string) {
    return this.query(`/artists/${id}`);
  }

  getAlbum(id: string) {
    return this.query(`/albums/${id}`);
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

  //pathAction ex: `/search`
  query(pathAction: string, params?: Array<string>) {

    let queryUrl = `${SpotifyConfig.BASE_URL}${pathAction}`;

    if (params) {
      queryUrl += `?${params.join("&")}`
    }

    const options = {
      headers: {
        Authorization: `Bearer ${SpotifyAPIKey}`
      }
    };

    return this.httpClient.get(queryUrl, options);

  }

}
