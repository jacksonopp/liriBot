const fs = require("fs");
const colors = require("colors");

const Do = function () {
    this.concert = function (searchTerm) {
        console.log(searchTerm);
    };
    this.movie = function (searchTerm) {
        console.log(searchTerm);
    };
    this.spotify = function (searchTerm) {
        console.log(searchTerm);
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

const action = new Do();

fs.readFile("../../random.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        const dataArr = data.split(",");
        console.log(dataArr);
        action.check(dataArr[0], dataArr[1]);
    }
})