import { Component, OnInit } from '@angular/core';
import { TmdbMoviesService } from '../modules/test/services/tmdb-movies.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-tmdb',
  templateUrl: './tmdb.component.html',
  styleUrls: ['./tmdb.component.scss']
})
export class TmdbComponent implements OnInit {

  public movies;

  constructor(private tmdbMoviesService: TmdbMoviesService) { }

  ngOnInit() {
    this.tmdbMoviesService.getMovies().subscribe(

      (data) => {
        this.movies = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
