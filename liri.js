//importing npm modules
require("dotenv").config();
const keys = require("./dependencies/spotify/keys");
const inq = require("inquirer");
const colors = require("colors");

//importing search dependencies
const MovieSearch = require("./dependencies/movies/movieCLI.js");
const ConcertSearch = require("./dependencies/concert/concertCLI.js");
const SpotifySearch = require("./dependencies/spotify/spotifyCLI.js");
// const spotify = new Spotify(keys.spotify);

//creating an object to hold the select mode for inquirer
const selectMode = [{
    type: "list",
    name: "selectMode",
    message: "Which item would you like to do?".green,
    choices: [
        "concert",
        "spotify",
        "movie",
        "do what it says"
    ]
}]

//creating an inq prompt promise
inq.prompt(selectMode).then((answer) => {
    console.log(`You chose: ${answer.selectMode}`);
    //if you choose concert, go to the concertCLI
    if (answer.selectMode === "concert") {
        //building an instance of ConcertSearch from the concertCLI module
        const concert = new ConcertSearch();
        concert.concertSearch();
    }
    //if you chose spotify, go to the spotifyCLI
    else if (answer.selectMode === "spotify") {
        const song = new SpotifySearch();
        song.spotifySearch();
    }
    //if you chose move, go to the movieCLI
    else if (answer.selectMode === "movie") {
        //creatong an instance of MovieSearch from movieCLI module
        const movie = new MovieSearch();
        movie.movieSearch();
    }
    //if you chose this, i'll figure out what to write here
    else if (answer.selectMode === "do what it says") {
        console.log(`${answer.selectMode} is coming soon...`);
    }
})