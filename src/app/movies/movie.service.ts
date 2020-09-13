import { Injectable } from "@angular/core";
import { IMovie } from "./movie";

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
            "Poster": "https://m.mediaamazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50_.jpg",
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
            "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            "Poster": "https://m.mediaamazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50_.jpg",
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
            "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            "Poster": "https://m.mediaamazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50_.jpg",
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
            "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            "Poster": "https://m.mediaamazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50_.jpg",
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
            "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            "Poster": "https://m.mediaamazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50_.jpg",
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
            "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            "Poster": "https://m.mediaamazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50_.jpg",
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
            "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            "Poster": "https://m.mediaamazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50_.jpg",
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
            "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            "Poster": "https://m.mediaamazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50_.jpg",
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
}