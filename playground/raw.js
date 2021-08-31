const http = require('http');
const url = 'http://api.weatherstack.com/current?access_key=3f812c2d5079118608e00dda7bb349b2&query=52.41,0.74&units=f';

const request = http.request(url, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data = data + chunk.toString();
  });

  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on('error', (error) => {
  console.log('an error', error);
});

request.end();
