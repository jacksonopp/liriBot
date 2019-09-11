//importing npm modules
const inq = require("inquirer");
const colors = require("colors");
const validator = require("validator");

//importing the spotify search module from spotifySearch
// const Search = require("./spotifySearch");

//creating variable to hold the question
const questions = [{
    name: "spotifySearch",
    message: "What song do you want to search for?".green
}]

//constructing a Concert object
const Spotify = function () {
    //adding the concertSearch method
    this.spotifySearch = function () {
        //adding inq prompt promise
        inq.prompt(questions).then((answer) => {
            //validator checks if there is no input and returns the default if so
            if (validator.isEmpty(answer.spotifySearch)) {
                console.log("you didn't enter anything")
            } else {
                console.log(answer.spotifySearch);
            };
        });
    }
}

//exporting the Concert construction
module.exports = Spotify;