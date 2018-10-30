import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Config } from './config.enum';
import { GenresDescriptor } from './models/genres';

@Injectable({
  providedIn: 'root'
})
export class GetGenresService {

  private url: string = Config.API_URL_GENRES;
  private apiKey: string = Config.API_KEY;

  constructor(
    private http: HttpClient
  ) { }
  getAllGenres() {
    return this.http.get(this.url + this.apiKey)
      .pipe(
        map((data) => {
          return GenresDescriptor.import(data);
        })
      );
  }
}
