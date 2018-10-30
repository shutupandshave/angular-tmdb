export enum Config {
// Configuration for TMDB
// To see the latest configuration fetch it from https://api.themoviedb.org/3/configuration?api_key=e4fb770a2e92528d51119e8c78448439
  API_URL = 'https://api.themoviedb.org/3/movie/popular',
  API_URL_GENRES = 'https://api.themoviedb.org/3/genre/movie/list',
  API_KEY = '?api_key=e4fb770a2e92528d51119e8c78448439',
  RATING_DEFAULT = '3',
  // Images
  // An image URL looks like this example:
  // http://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg

    IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/',

  // Sizes: w300, w780, w1280, original
  // BACKDROP_SIZE = 'w1280',

  // w92, w154, w185, w342, w500, w780, original
  // POSTER_SIZE = 'w500'
}
