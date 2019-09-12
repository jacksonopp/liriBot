const fs = require("fs");
const colors = require("colors");

//import my modules
const Concert = require("../concert/concertSearch");
const Movies = require("../movies/movieSearch");
const Spotify = require("../spotify/spotifySearch");

const Do = function () {
    this.concert = function (searchTerm) {
        const concertResponse = new Concert();
        concertResponse.search(searchTerm);
    };
    this.movie = function (searchTerm) {
        const movieResponse = new Movies();
        movieResponse.search(searchTerm);
    };
    this.spotify = function (searchTerm) {
        const spotifyResponse = new Spotify();
        spotifyResponse.search(searchTerm);
    };
    this.other = function () {
        console.log("Please enter a valid method in random.txt".red);
        console.log(`Your options are:
        concert-this
        movie-this
        spotify-this-song`.yellow);
    }
    this.check = function (input, searchTerm) {
        const expr = input;
        switch (expr) {
            case "concert-this":
                this.concert(searchTerm);
                break;
            case "movie-this":
                this.movie(searchTerm);
                break;
            case "spotify-this-song":
                this.spotify(searchTerm);
                break;
            default:
                this.other();
        }
    }
}


module.exports = Do;