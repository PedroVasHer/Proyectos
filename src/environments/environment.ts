// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'https://platzi-store.herokuapp.com/products',
  firebase: {
    apiKey: 'AIzaSyDTNMqUG7N9vf-8kyPmmTFvPdUbryj1Wck',
    authDomain: 'store-a6289.firebaseapp.com',
    databaseURL: 'https://store-a6289.firebaseio.com',
    projectId: 'store-a6289',
    storageBucket: 'store-a6289.appspot.com',
    messagingSenderId: '343901804292',
    appId: '1:343901804292:web:71eeda53bb954de7006251'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
