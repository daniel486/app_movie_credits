import { Component, OnInit } from '@angular/core';
import { MovieService } from '../test/services/movie.service';

@Component({
  selector: 'app-test-movies',
  templateUrl: './test-movies.component.html',
  styleUrls: ['./test-movies.component.scss']
})
export class TestMoviesComponent implements OnInit {

  movies: any;
  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.movies = this.movieService.getItems();
  }

}
