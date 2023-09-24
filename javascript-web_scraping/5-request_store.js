#!/usr/bin/node

const req = require('request');
const fs = require('fs');
req(process.argv[2], (error, content) => {
  if (error) {
    console.error(error);
  }
  fs.writeFile(process.argv[3], content, error => {
    if (error) {
      console.error(error);
    }
  });
});