import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class TmdbMoviesService {

  constructor(private http: HttpClient) { }

  getMovies(){
    //return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=14383e7a1e2a63bc1e67c0052614384f&language=en-US&page=1');
    //esta es otra forma para obtener solo lo necesario
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=14383e7a1e2a63bc1e67c0052614384f&language=en-US&page=1')
    .pipe(map(
      (response: any) => {
        return response.results.map((item)=>{
          return {
            id: item.id,
            title: item.title
          }
        });
      }
    ));
  }
}
