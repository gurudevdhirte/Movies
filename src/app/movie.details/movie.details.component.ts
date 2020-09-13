import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from '../movies/movie';
import { MovieService } from "../movies/movie.service";

@Component({
  selector: 'app-movie.details',
  templateUrl: './movie.details.component.html',
  styleUrls: ['./movie.details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  //movie: IMovie = null;  
  movie: any;

  constructor(private movieService : MovieService, private route : ActivatedRoute) {
    console.log(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
    //this.movie = 
    let id= this.route.snapshot.paramMap.get('id');
    this.movie = this.movieService.getMoviesList().filter((movie : IMovie) => movie.imdbID == id.toLocaleString())[0];
  }

}
