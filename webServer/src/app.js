const path = require('path');
const express = require('express');

const publicDir = path.join(__dirname, '../public');

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(publicDir));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Nicholas Gerard',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Nicholas Gerard',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Here for any help you might need!',
    name: 'Nicholas Gerard',
  });
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Shitty Outside',
    location: 'Thetford',
  });
});

app.listen(3000, () => {
  console.log('server running on port 3000');
});
