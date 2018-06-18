import { Component, OnInit } from '@angular/core';

import { TmdbCreditsService } from '../modules/test/services/tmdb-credits.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tmdb-credits',
  templateUrl: './tmdb-credits.component.html',
  styleUrls: ['./tmdb-credits.component.scss']
})
export class TmdbCreditsComponent implements OnInit {

  private routerSubscribe: any;
  public cast: any;

  constructor(
    private tmdbCreditsService: TmdbCreditsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routerSubscribe = this.route.params.subscribe(params =>{

      let idMovie: number = +params['idMovie'];
      this.tmdbCreditsService.getCredits(idMovie).subscribe(
        (data:any) => {
          this.cast = data
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

}
