// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

};

export const spotify = {
  config: {
    SPOTIFY_BEARER_TOKEN: "BQCBP579-ZmHEqUQBLn8n0kxKBmh16FSY_gyyAMLtlAN49ubPp5sr_oWnnMY3XUHYM25pDlDq8Cwb_7AWf6P4MH_ZN1i5Qc4FKJoQZGKfJI4bzUtQ84-4gCtMtH8Itp2P1H5hgtKhAg_-bqDKw",
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
