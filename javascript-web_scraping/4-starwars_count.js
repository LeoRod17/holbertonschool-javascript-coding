#!/usr/bin/node

//Write a script that prints the number of movies where the character “Wedge Antilles” is present.
const req = require('request');
let count = 0;
req(process.argv[2], (error, content) => {
  if (error) {
    console.error(error);
  }
  const jason = JSON.parse(content.body).results;
  for (x in jason) {
    for (y in x.characters) {
      if (y.includes('18')) {
        count++;
      }
    }
  }
  console.log(count);
});
