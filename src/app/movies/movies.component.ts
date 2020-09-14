import { Component, OnInit } from '@angular/core';
import {  IMovie } from "./movie";
import { MovieService } from "./movie.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  pageTitle: string = 'Movies List';
    
    languageList: any;
    locationList: any;
    public isMovie = true;
    public isMovieDetail = false;

    _listFilter: string;
    get listFilter() :string {
        return this._listFilter;
    }
    set listFilter(value :string) {
        this._listFilter= value;
         this.filteredMovies = this.listFilter ? this.performFilter(this.listFilter) : this.movies;        
    }

    filteredMovies : IMovie[];
    movies: IMovie[] = [];   

    constructor(private movieService : MovieService, private router: Router)
    {   
      this.getLanguages();   
      this.getLocations();      
    }

    ngOnInit(): void {      
        this.movies = this.movieService.getMoviesList();
        this.filteredMovies = this.movies;     
    }

    performFilter(filterBy : string ) : IMovie[] {
        filterBy = filterBy.toLocaleLowerCase();

        return this.movies.filter((movie : IMovie) => 
        movie.Title.toLocaleLowerCase().indexOf(filterBy) !== -1)
    }

    getLanguages()  
    {   
    this.languageList= this.languages;   
    }

    getLocations()  
    {   
    this.locationList= this.location;   
    }

    filterLanguage(filterVal: any) {
      if (filterVal == "0")
      {
          //this.filteredMovies = this.filteredMovies;
          this.filteredMovies = this.movies;
          //console.log(this.filteredMovies);
      }
      else
      {
        this.filteredMovies = this.movies;
          this.filteredMovies = this.filteredMovies.filter((movie : IMovie) => movie.Language == filterVal);
      }
  }

  filterLocation(filterVal: any) {
    if (filterVal == "0")
    {
        //this.filteredMovies = this.filteredMovies;
        this.filteredMovies = this.movies;
    }
    else
    {
        this.filteredMovies = this.movies;
        this.filteredMovies = this.filteredMovies.filter((item) => item.Location == filterVal);
    }
} 

btnClick= function (id: string) {  
  this.isMovie = false;
  this.isMovieDetail = true;
  console.log(this.isMovieDetail);  
  this.router.navigateByUrl('/movies/'+ id);
};

    languages = [
      {"Id": 1,"Name": "HINDI"},
      {"Id": 2,"Name": "ENGLISH"}     
   ];

   location = [
    {"Id": 1,"Name": "DELHI"},
    {"Id": 2,"Name": "MUMBAI"},
    {"Id": 3,"Name": "BANGALORE"}, 
    {"Id": 4,"Name": "CHENNAI"}     
 ];

}
