import { Component, OnInit } from '@angular/core';
import {  IMovie } from "./movie";
import { MovieService } from "./movie.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  pageTitle: string = 'Movies List';
    // imageWidth: number = 50;
    // imageMargin: number = 2;
    // showImage: boolean =false;
    //listFilter: string ='cart'; 
    languageList: any;
    locationList: any;

    _listFilter: string;
    get listFilter() :string {
        return this._listFilter;
    }
    set listFilter(value :string) {
        this._listFilter= value;
         this.filteredMovies = this.listFilter ? this.performFilter(this.listFilter) : this.movies;
        //this.filteredProducts = this.products;
    }

    filteredMovies : IMovie[];
    movies: IMovie[] = [];

    // toogleImage(): void{
    //      this.showImage = !this.showImage
    // }    

    constructor(private movieService : MovieService)
    {   
      this.getLanguages();   
      this.getLocations();      
    }

    ngOnInit(): void {
        this.movies = this.movieService.getMoviesList();
        this.filteredMovies = this.movies;     
    }

    onRatingClicked(message :string): void
    {
        this.pageTitle ='Movies List: ' + message;
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
          console.log(this.filteredMovies);
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
