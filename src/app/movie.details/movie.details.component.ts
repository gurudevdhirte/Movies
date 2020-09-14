import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { IMovie } from '../movies/movie';
import { MovieService } from "../movies/movie.service";

@Component({
  selector: 'app-movie.details',
  templateUrl: './movie.details.component.html',
  //template : 'Test123',
  styleUrls: ['./movie.details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  //@Input() movie: IMovie;

  @Input() id1: string; 
  movie: any;    
  //private id: any;

  constructor(private movieService : MovieService, private route : ActivatedRoute,private router: Router) {    
    console.log(this.route.snapshot.paramMap.get('id'));    
    
   }

  ngOnInit(): void {    
     let id= this.route.snapshot.paramMap.get('id');
     this.movie = this.movieService.getMoviesList().filter((movie : IMovie) => movie.imdbID == id.toLocaleString())[0];

  }

  public gotoMovies() {   
    this.router.navigateByUrl('/movies')
  }

}
