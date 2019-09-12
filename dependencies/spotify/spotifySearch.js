require("dotenv").config();
const keys = require("./keys");
const Spotify = require("node-spotify-api");


const SpotifySearch = function () {
    this.search = function (song) {
        const spotify = new Spotify(keys.spotify);


        spotify.search({ type: "track", query: song }, function (err, res) {
            if (err) {
                console.log(err)
            }
            const songData = res.tracks.items[0];
            // console.log(songData);
            console.log(`Artist: ${songData.artists[0].name}`); //artist name
            console.log(`Song name: ${songData.name}`); // song name
            console.log(`Link: ${songData.external_urls.spotify}`); // Link
            console.log(`Album: ${songData.album.name}`); // Album
        })

    }
}

module.exports = SpotifySearch;