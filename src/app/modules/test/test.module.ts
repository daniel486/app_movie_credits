import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
//primero los modulos que tengan que ver con angular, luego los de material
//y por ultimo los que se esten implementando.
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
//import { UiTestComponent } from './ui-test/ui-test.component';
import { UiTestCardComponent } from './ui-test-card/ui-test-card.component';
import { RouterModule } from '@angular/router';
import { TestCountriesComponent } from '../test-countries/test-countries.component';
import { TestCategoriesComponent } from '../test-categories/test-categories.component';
import { TestActorsComponent } from '../test-actors/test-actors.component';
import { TestMoviesComponent } from '../test-movies/test-movies.component';
import { TestDetailActorComponent } from '../test-detail-actor/test-detail-actor.component';
import { TmdbComponent } from '../../tmdb/tmdb.component';
import { TmdbCreditsComponent } from '../../tmdb-credits/tmdb-credits.component';
import { HttpClientModule } from '@angular/common/http';
//import { TestServicesComponent } from './test-services/test-services.component';
//import { UiTestSassComponent } from './ui-test-sass/ui-test-sass.component';
//import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    HttpModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'categories',
        component: TestCategoriesComponent
      },
      {
        path: 'countries',
        component: TestCountriesComponent
      },
      {
        path: 'actors',
        component: TestActorsComponent
      },
      {
        path: 'movies',
        component: TestMoviesComponent
      },
      {
        path: 'actor/:id',
        component: TestDetailActorComponent
      },
      {
        path: 'tmdb-movies',
        component: TmdbComponent
      },
      {
        path: 'tmdb-credits/:idMovie',
        component: TmdbCreditsComponent
      }
    ]),
    FlexLayoutModule,
    MatButtonModule, MatCheckboxModule,
    MatCardModule,
    //MatIconModule
  ],
  declarations: [/*UiTestComponent,*/ UiTestCardComponent, TestCategoriesComponent, TestCountriesComponent, TestActorsComponent, TestMoviesComponent, TestDetailActorComponent, /*TestServicesComponent, UiTestSassComponent*/],
  exports: [
    //UiTestComponent,
    UiTestCardComponent,
    //TestServicesComponent,
    //UiTestSassComponent
]
})
export class TestModule { }
