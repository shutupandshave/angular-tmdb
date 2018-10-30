/**
 * This is the genres descriptor that contains all the genres.
 */
export class GenresDescriptor {

  public genres: GenreDescriptor[] = [];

  public static import(rawData: any) {

    const response: GenresDescriptor = new GenresDescriptor();

    let genre: GenreDescriptor;
    if (rawData.hasOwnProperty('genres')) {
      for (let i = 0; i < rawData.genres.length; i++) {
        const row: any = rawData.genres[i];
        genre = GenreDescriptor.import(row);
        response.genres.push(genre);
      }
    }
    return response;
  }
}

/**
 * This genre descriptor set the types that will be used for genres.
 */
export class GenreDescriptor {

  public id: number;
  public name: string;

  public static import(rawData: any) {
    const genre: GenreDescriptor = new GenreDescriptor();

    genre.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
    genre.name = rawData.hasOwnProperty('name') ? rawData.name : '';
    return genre;
  }
}
