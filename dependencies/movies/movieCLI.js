const inq = require("inquirer");
const colors = require("colors");
const validator = require("validator");
const Search = require("./movieSearch");

const questions = [{
    name: "movieSearch",
    message: "What movie do you want to search for?".green
}]
const Movie = function () {
    this.movieSearch = function () {
        inq.prompt(questions).then((answer) => {
            if (validator.isEmpty(answer.movieSearch)) {
                const searchResponse = new Search();

                searchResponse.search("Mr. Nobody");
            } else {
                const searchResponse = new Search();

                searchResponse.search(answer.movieSearch);
            };
        });
    }
}

module.exports = Movie;