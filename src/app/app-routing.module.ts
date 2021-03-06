import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie.details/movie.details.component';

const routes: Routes = [	
	{ path: 'movies', component: MoviesComponent },
	{ path: 'movies/:id', component: MovieDetailsComponent },
	{ path: '', pathMatch: 'full', redirectTo: 'movies' }	
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
	MoviesComponent,
	MovieDetailsComponent
];
