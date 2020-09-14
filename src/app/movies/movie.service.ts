import { Injectable } from "@angular/core";
import { IMovie } from "./movie";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn : 'root'
})

export class MovieService
{
    getMoviesList() :IMovie[]
    {
        return[
          {
            "Language": "ENGLISH",
            "Location": "DELHI",
            "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50_.jpg",
            "SoundEffects": [
            "RX6",
            "SDDS"
            ],
            "Stills": [
            "https://m.mediaamazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_UY99_CR24,0,99,99_AL_.jpg",
            "https://m.mediaamazon.com/images/M/MV5BNzAwOTk3MDg5MV5BMl5BanBnXkFtZTcwNjQxNDY3Mw@@._V1_UY99_CR29,0,99,99_AL_.jpg",
            "https://m.mediaamazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
            ],
            "Title": "The Shawshank Redemption",
            "imdbID": "tt0111161",
            "listingType": "NOW_SHOWING",
            "imdbRating": "9.2"
           },
           {
            "Language": "ENGLISH",
            "Location": "MUMBAI",
            "Plot": "Superhero",
            "Poster": "https://i.pinimg.com/564x/69/cb/72/69cb72af524e55801b547c85025b671d.jpg",
            "SoundEffects": [
            "RX6",
            "SDDS"
            ],
            "Stills": [
            "https://m.mediaamazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_UY99_CR24,0,99,99_AL_.jpg",
            "https://m.mediaamazon.com/images/M/MV5BNzAwOTk3MDg5MV5BMl5BanBnXkFtZTcwNjQxNDY3Mw@@._V1_UY99_CR29,0,99,99_AL_.jpg",
            "https://m.mediaamazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
            ],
            "Title": "Avengers",
            "imdbID": "tt0111162",
            "listingType": "NOW_SHOWING",
            "imdbRating": "9.5"
           },
           {
            "Language": "HINDI",
            "Location": "BANGALORE",
            "Plot": "DANGAL Story - Wrestling",
            "Poster": "https://i.pinimg.com/236x/dc/db/1c/dcdb1c47967d35b6be7306fb6fe6bb9e.jpg",
            "SoundEffects": [
            "RX6",
            "SDDS"
            ],
            "Stills": [
            "https://m.mediaamazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_UY99_CR24,0,99,99_AL_.jpg",
            "https://m.mediaamazon.com/images/M/MV5BNzAwOTk3MDg5MV5BMl5BanBnXkFtZTcwNjQxNDY3Mw@@._V1_UY99_CR29,0,99,99_AL_.jpg",
            "https://m.mediaamazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
            ],
            "Title": "DANGAL",
            "imdbID": "tt0111163",
            "listingType": "NOW_SHOWING",
            "imdbRating": "9.7"
           },
           {
            "Language": "ENGLISH",
            "Location": "CHENNAI",
            "Plot": "STAR WARS",
            "Poster": "data:image/jpeg;base64,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",
            "SoundEffects": [
            "RX6",
            "SDDS"
            ],
            "Stills": [
            "https://m.mediaamazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_UY99_CR24,0,99,99_AL_.jpg",
            "https://m.mediaamazon.com/images/M/MV5BNzAwOTk3MDg5MV5BMl5BanBnXkFtZTcwNjQxNDY3Mw@@._V1_UY99_CR29,0,99,99_AL_.jpg",
            "https://m.mediaamazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
            ],
            "Title": "STAR WARS",
            "imdbID": "tt0111164",
            "listingType": "NOW_SHOWING",
            "imdbRating": "8.1"
           },
           {
            "Language": "HINDI",
            "Location": "MUMBAI",
            "Plot": "College Life",
            "Poster": "https://i.pinimg.com/236x/21/a2/4b/21a24b99327be8cde9135c1b3e5c2b01.jpg",
            "SoundEffects": [
            "RX6",
            "SDDS"
            ],
            "Stills": [
            "https://m.mediaamazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_UY99_CR24,0,99,99_AL_.jpg",
            "https://m.mediaamazon.com/images/M/MV5BNzAwOTk3MDg5MV5BMl5BanBnXkFtZTcwNjQxNDY3Mw@@._V1_UY99_CR29,0,99,99_AL_.jpg",
            "https://m.mediaamazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
            ],
            "Title": "3 IDIOTS",
            "imdbID": "tt0111165",
            "listingType": "NOW_SHOWING",
            "imdbRating": "9.8"
           },
           {
            "Language": "HINDI",
            "Location": "MUMBAI",
            "Plot": "WAR Story",
            "Poster": "data:image/jpeg;base64,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",
            "SoundEffects": [
            "RX6",
            "SDDS"
            ],
            "Stills": [
            "https://m.mediaamazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_UY99_CR24,0,99,99_AL_.jpg",
            "https://m.mediaamazon.com/images/M/MV5BNzAwOTk3MDg5MV5BMl5BanBnXkFtZTcwNjQxNDY3Mw@@._V1_UY99_CR29,0,99,99_AL_.jpg",
            "https://m.mediaamazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
            ],
            "Title": "WAR",
            "imdbID": "tt0111166",
            "listingType": "NOW_SHOWING",
            "imdbRating": "9.2"
           },
           {
            "Language": "ENGLISH",
            "Location": "BANGALORE",
            "Plot": "SPIDER MAN Story",
            "Poster": "https://i.pinimg.com/236x/d4/ac/c8/d4acc863d31ab88d4a508976c22162de.jpg",
            "SoundEffects": [
            "RX6",
            "SDDS"
            ],
            "Stills": [
            "https://m.mediaamazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_UY99_CR24,0,99,99_AL_.jpg",
            "https://m.mediaamazon.com/images/M/MV5BNzAwOTk3MDg5MV5BMl5BanBnXkFtZTcwNjQxNDY3Mw@@._V1_UY99_CR29,0,99,99_AL_.jpg",
            "https://m.mediaamazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
            ],
            "Title": "SPIDER MAN",
            "imdbID": "tt0111167",
            "listingType": "NOW_SHOWING",
            "imdbRating": "9.2"
           },
           {
            "Language": "ENGLISH",
            "Location": "CHENNAI",
            "Plot": "THE DARK NIGHT Story",
            "Poster": "https://i.pinimg.com/236x/2a/b0/9f/2ab09fbc7bd8e2e9075d7d89d9813ad4.jpg",
            "SoundEffects": [
            "RX6",
            "SDDS"
            ],
            "Stills": [
            "https://m.mediaamazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_UY99_CR24,0,99,99_AL_.jpg",
            "https://m.mediaamazon.com/images/M/MV5BNzAwOTk3MDg5MV5BMl5BanBnXkFtZTcwNjQxNDY3Mw@@._V1_UY99_CR29,0,99,99_AL_.jpg",
            "https://m.mediaamazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
            ],
            "Title": "THE DARK NIGHT",
            "imdbID": "tt0111168",
            "listingType": "NOW_SHOWING",
            "imdbRating": "9.2"
           }
        ]
    }

    getMovie(id: string) {
        return this.getMoviesList().find(movie => movie.imdbID === id);
      }
}