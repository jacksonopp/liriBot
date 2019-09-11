const inq = require("inquirer");
const colors = require("colors");
const validator = require("validator");
const Search = require("./concertSearch");

const questions = [{
    name: "bandSearch",
    message: "Which band do you want to search for?".green
}]
const Concert = function () {
    this.concertSearch = function () {
        inq.prompt(questions).then((answer) => {
            if (validator.isEmpty(answer.bandSearch)) {
                console.log("you didn't type in anything");
            } else {
                console.log(answer.bandSearch);
            };
        });
    }
}

module.exports = Concert;