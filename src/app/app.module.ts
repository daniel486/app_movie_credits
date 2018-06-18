import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TestModule } from './modules/test/test.module';

import {TestServicesComponent} from './modules/test/test-services/test-services.component';

import {MatCardModule} from '@angular/material/card';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { TestObservablesComponent } from './test-observables/test-observables.component';

import {MatMenuModule} from '@angular/material/menu';
import { TmdbComponent } from './tmdb/tmdb.component';
import { TmdbCreditsComponent } from './tmdb-credits/tmdb-credits.component';


@NgModule({
  declarations: [
    TestServicesComponent,
    AppComponent,
    TestObservablesComponent,
    TmdbComponent,
    TmdbCreditsComponent
  ],
  imports: [
    MatDividerModule,
    MatButtonModule, MatCheckboxModule,
    FlexLayoutModule,
    MatCardModule,
    TestModule,
    BrowserModule,
    AppRoutingModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
