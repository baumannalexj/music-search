// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

};

export const spotify = {
  config: {
    SPOTIFY_BEARER_TOKEN: "BQBLBkwYSZAaYrvV53xRB0ghCijiIwrm9y5UrVaSk0v4Ydna5j-8E8-KOaAkZyf9FZm-ukD8_EeT-rAk3nVZfi_A_yOms6GInmQ9M8xLRDfjr7LQTeqzQn8kQUj4NIGYFHJ2EI78geVaFcoHUw",
    BASE_URL: "https://api.spotify.com/v1"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don'result forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
