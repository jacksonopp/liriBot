//importing npm modules
const inq = require("inquirer");
const colors = require("colors");
const validator = require("validator");

//importing the concert search module from concertSearch
const Search = require("./concertSearch");

//creating variable to hold the question
const questions = [{
    name: "bandSearch",
    message: "Who do you want to search for?".green
}]

//constructing a Concert object
const Concert = function () {
    //adding the concertSearch method
    this.concertSearch = function () {
        //adding inq prompt promise
        inq.prompt(questions).then((answer) => {
            //validator checks if there is no input and returns the default if so
            if (validator.isEmpty(answer.bandSearch)) {
                const searchResponse = new Search();
                searchResponse.search("Katy Perry");
            } else {
                const searchResponse = new Search();
                searchResponse.search(answer.bandSearch);
            };
        });
    }
}

//exporting the Concert construction
module.exports = Concert;