//importing and initializing npm modules
const axios = require("axios");
var moment = require("moment");
moment().format();

//constructing ConcertSearch function
const ConcertSearch = function () {
    //setting up search method
    this.search = function (band) {
        const queryURL = `https://rest.bandsintown.com/artists/${band}/events?app_id=codingbootcamp`;
        //axios fetch and response promise
        axios.get(queryURL).then(function (response) {
            // console.log(response);
            const responseData = response.data[0];
            //log the response
            console.log(`
${band}'s next show is:

Venue: ${responseData.venue.name}
Venue Location: ${responseData.venue.city}, ${responseData.venue.region}, ${responseData.venue.country}
Date: ${moment(responseData.datetime).format("MM/DD/YYYY")}`)
        })
    }
}

//export ConcertSearch construction
module.exports = ConcertSearch;