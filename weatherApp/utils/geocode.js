const request = require('request');

const geocode = (address, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(address) +
    '.json?access_token=pk.eyJ1Ijoic2lyZGljaG9sYXMiLCJhIjoiY2tzNXplaTZlMGx2aDJvczMzcGZ4ZTJ5ZCJ9.e4aqIgtLMuTKoI601eqjng&limit=1';

  request({ url: url, json: true }, (error, response) => {
    const { message } = response.body;
    const { 1: latitude, 0: longitude } = response.body.features[0].center;
    const { place_name } = response.body.features[0];

    if (error) {
      callback('Unable to connect', undefined);
    } else if (message) {
      console.log(message);
    } else {
      callback(undefined, {
        latitude,
        longitude,
        place_name,
      });
    }
  });
};

module.exports = geocode;
