require("dotenv").config();
const keys = require("./dependencies/keys");
const inq = require("inquirer");
const colors = require("colors");

//search dependencies
const MovieSearch = require("./dependencies/movies/movieCLI.js");
const ConcertSearch = require("./dependencies/concert/concertCLI.js");
// const spotify = new Spotify(keys.spotify);


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

inq.prompt(selectMode).then((answer) => {
    console.log(`You chose: ${answer.selectMode}`);

    if (answer.selectMode === "concert") {
        const concert = new ConcertSearch();
        concert.concertSearch();
    }
    else if (answer.selectMode === "spotify") {
        console.log(`${answer.selectMode} is coming soon...`);
    }
    else if (answer.selectMode === "movie") {
        const movie = new MovieSearch();
        movie.movieSearch();
    }
    else if (answer.selectMode === "do what it says") {
        console.log(`${answer.selectMode} is coming soon...`);
    }
})