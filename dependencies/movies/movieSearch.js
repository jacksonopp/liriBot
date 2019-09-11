const axios = require("axios");

const MovieSearch = function () {
    this.search = function (movie) {
        const queryURL = `http://www.omdbapi.com/?apikey=50fd9735&t=${movie}`;

        axios.get(queryURL).then(function (response) {
            // console.log(response);
            console.log(
                `
Title: ${response.data.Title}
Year: ${response.data.Year}
Rating: ${response.data.Rated}
Rotten Tomatoes: ${response.data.Ratings[1].Value}
Country: ${response.data.Country}
Language: ${response.data.Language}
Plot: ${response.data.Plot}
Actors: ${response.data.Actors}
`
            )
        })
    }
}

module.exports = MovieSearch;