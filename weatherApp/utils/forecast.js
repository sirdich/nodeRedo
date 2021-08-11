const request = require('request');

const forecast = (lat, lon, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=3f812c2d5079118608e00dda7bb349b2&units=f&query=' + lat + ',' + lon;
  +'$units=f';

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Low Level, Check Network');
    } else if (response.body.error) {
      callback(response.body.error.type);
    } else {
      callback(undefined, {
        latitude: response.body.location.lat,
        longitude: response.body.location.lon,
        location: response.body.location.name,
      });
    }
    console.log(
      response.body.current.weather_descriptions[0] +
        ': It is currently ' +
        response.body.current.temperature +
        ' degrees out and it feels like ' +
        response.body.current.feelslike +
        ' degrees.'
    );
  });
};

module.exports = forecast;
