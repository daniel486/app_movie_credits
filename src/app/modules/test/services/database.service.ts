import { Injectable } from '@angular/core';
import { ActorService } from './actor.service';
import { MovieService } from './movie.service';
import { CategoryService } from './category.service';
import { CountryService } from './country.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private items$ = new Subject<any[]>();

  private items:any[] = [
    {
      movie: this.movieService.get(0),
      actors: [
        this.actorService.get(0),
        this.actorService.get(1),
      ],
      category: this.categoryService.get(0),
      country: this.countryService.get(1),
      ranking: 9.7
    },
    {
      movie: this.movieService.get(1),
      actors: [
        this.actorService.get(2),
        this.actorService.get(3),
      ],
      category: this.categoryService.get(3),
      country: this.countryService.get(3),
      ranking: 9.7
    },
    {
      movie: this.movieService.get(2),
      actors: [
        this.actorService.get(0),
        this.actorService.get(1),
      ],
      category: this.categoryService.get(0),
      country: this.countryService.get(1),
      ranking: 9.7
    }
  ]

  constructor(
    private actorService: ActorService,
    private movieService: MovieService,
    private categoryService: CategoryService,
    private countryService: CountryService
  ) { }

  getItems(){
    return this.items;
  }

  setRanking(index, rank){
    this.items[index].ranking = rank;
  }

  getItems$(): Observable<any[]>{
    return this.items$.asObservable();
  }
}
