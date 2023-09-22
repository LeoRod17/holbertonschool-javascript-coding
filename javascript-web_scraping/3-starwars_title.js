#!/usr/bin/node

const req = require('request');
const id = process.argv[2]
req('https://swapi-api.hbtn.io/api/films/' + id, (error, content) => {
  if (error) {
    console.error(error);
  }
  console.log(JSON.parse(content).title);
});
