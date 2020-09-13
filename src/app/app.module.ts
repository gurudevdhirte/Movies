import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { AppRoutingModule, routableComponents  } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
//import { MovieDetailsComponent } from './movie.details/movie.details.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    //MovieDetailsComponent,
    routableComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MoviesComponent]
})
export class AppModule { }
