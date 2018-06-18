import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class TmdbCreditsService {

  constructor(private http: HttpClient) { }

  getCredits(idMovie){
    return this.http.get('https://api.themoviedb.org/3/movie/'+idMovie+'/credits?api_key=14383e7a1e2a63bc1e67c0052614384f')
    .pipe(
      map(
        (data: any) => {
          return data.cast.map((item) => {
            return {
              id: item.id,
              name: item.name,
              character: item.character,
              profile_path: item.profile_path
            }
          });
        }
      )
    );
  }
}
