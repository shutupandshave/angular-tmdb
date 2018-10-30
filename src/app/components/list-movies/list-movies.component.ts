import { Component, OnInit } from '@angular/core';
import { Movies } from '../../shared/models/movies';
import { GenreDescriptor } from '../../shared/models/genres';
import { GetGenresService } from '../../shared/get-genres.service';
import { GetMoviesService } from '../../shared/get-movies.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  public movies: Movies = new Movies();
  length = 0;
  pages = 0;

  private genres: GenreDescriptor[] = [];

  constructor(
    private moviesService: GetMoviesService,
    private genresService: GetGenresService
  ) { }

  setActualPage(event: PageEvent) {
    event.pageIndex = event.pageIndex + 1;
    this.moviesService.getAllMovies(event.pageIndex).subscribe(
      (data: any) => {
        this.movies = data;
      }
    );
  }

  getGenre(data) {
    let genre: GenreDescriptor;
    if (data.hasOwnProperty('genres')) {
      for (let i = 0; i < data.genres.length; i++) {
        const row: any = data.genres[i];
        genre = GenreDescriptor.import(row);
        // console.log(genre);
        // this.genres.push(genre);
      }
    }

  }

  ngOnInit() {
    this.moviesService.getAllMovies(1).subscribe(
      (data: any) => {
        this.movies = data;
        this.length = this.movies.total_results;
        this.pages = this.movies.total_pages;
      }
    );
    this.genresService.getAllGenres().subscribe(
      (data: any) => {
       this.genres = data;
       // console.log(this.genres);
       this.getGenre(data);
      }
    );
  }

}
