const fs = require('fs');

const buffer = fs.readFileSync('json1.json');
const dataString = buffer.toString();
const dataJSON = JSON.parse(dataString);

dataJSON.name = 'Nicholas';
dataJSON.age = '34';

fs.writeFileSync('json1.json', JSON.stringify(dataJSON));

console.log(dataJSON);
