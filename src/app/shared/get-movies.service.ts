import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Config } from './config.enum';
import { Movies } from './models/movies';

@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {

  private url: string = Config.API_URL;
  private apiKey: string = Config.API_KEY;

  constructor(
    private http: HttpClient
  ) {  }
  getAllMovies(page: number) {
    return this.http.get(this.url + this.apiKey + '&page=' + page)
      .pipe(
        map((data) => {
            return Movies.import(data);
        })
      );
    }
}

