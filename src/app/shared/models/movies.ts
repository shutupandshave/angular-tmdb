export class Movies {
  /**
   * This specifies a list of movies in an array of individual movies.
   */

  public total_pages: number;
  public total_results: number;
  public movies: Movie[] = [];

  public static import(rawData: any) {
    const response: Movies = new Movies();

    let movie: Movie;

    response.total_pages = rawData.hasOwnProperty('total_pages') ? rawData.total_pages : 0;
    response.total_results = rawData.hasOwnProperty('total_results') ? rawData.total_results : 0;

    if (rawData.hasOwnProperty('results')) {
      for (let i = 0; i < rawData.results.length; i++) {
        const row: any = rawData.results[i];
        movie = Movie.import(row);
        response.movies.push(movie);
      }
    }
    console.log(response);
    return response;
  }
}

/**
 * This specifies the types used for the movies in the list-movies component
 */
export class Movie {

  public id: number;
  public title: string;
  public poster_path: string;
  public popularity: number;
  public vote_average: number;
  public genreIDs: any;

  public static import(rawData: any) {
    console.log(rawData);
    const movieInd: Movie = new Movie();
    movieInd.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
    movieInd.title = rawData.hasOwnProperty('title') ? rawData.title : '';
    movieInd.poster_path = rawData.hasOwnProperty('poster_path') ? rawData.poster_path : '';
    movieInd.popularity = rawData.hasOwnProperty('popularity') ? rawData.popularity : 0;
    movieInd.vote_average = rawData.hasOwnProperty('vote_average') ? rawData.vote_average : 0;
    // movieInd.genreIDs = rawData.hasOwnProperty('genre_ids') ? rawData.genres.map(g => g.name).join(', ') : 0;

    return movieInd;
  }
}
