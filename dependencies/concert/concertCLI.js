const inq = require("inquirer");
const colors = require("colors");
const validator = require("validator");
const Search = require("./concertSearch");

const questions = [{
    name: "bandSearch",
    message: "Who do you want to search for?".green
}]
const Concert = function () {
    this.concertSearch = function () {
        inq.prompt(questions).then((answer) => {
            if (validator.isEmpty(answer.bandSearch)) {
                console.log("you didn't type in anything");
            } else {
                const searchResponse = new Search();
                searchResponse.search(answer.bandSearch);
            };
        });
    }
}

module.exports = Concert;