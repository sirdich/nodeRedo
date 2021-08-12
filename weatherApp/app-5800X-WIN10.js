const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const search = process.argv.splice(2);

if (search.length === 0) {
  console.log('Please provide a search');
} else {
  //utils/geocode.js
  geocode(search, (error, geoData) => {
    if (error) {
      return console.log(error);
    }
    //utils/forecast.js
    forecast(geoData.latitude, geoData.longitude, (error, foreData) => {
      if (error) {
        return console.log(error);
      }

      console.log(geoData.location);
    });
  });
}
