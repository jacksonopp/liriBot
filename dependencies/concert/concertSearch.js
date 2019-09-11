const axios = require("axios");
var moment = require("moment");
moment().format();

const ConcertSearch = function () {
    this.search = function (band) {
        const queryURL = `https://rest.bandsintown.com/artists/${band}/events?app_id=codingbootcamp`;

        axios.get(queryURL).then(function (response) {
            // console.log(response);
            const responseData = response.data[0];
            console.log(`
${band}'s next show is:

Venue: ${responseData.venue.name}
Venue Location: ${responseData.venue.city}, ${responseData.venue.region}, ${responseData.venue.country}
Date: ${moment(responseData.datetime).format("MM/DD/YYYY")}`)
        })
    }
}
// Date: ${ moment(response.data.datetime).format("MM/DD/YYYY") }

module.exports = ConcertSearch;