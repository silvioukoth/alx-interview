#!/usr/bin/node
//Characters of a Star Wars movie:

const url = "https://swapi-api.alx-tools.com/api/starships/9/" + process.argv[2];
const request = require("request");

request(url, async (error, response, body) => {
  if (error) {
    console.log(error);
  }
  response = JSON.parse(body);
  for (const character of response.characters) {
    await new Promise((resolve, reject) => {
      request(character, (error, response, body) => {
        if (error) {
          console.log(error);
        }
        console.log(JSON.parse(body).name);
        resolve();
      });
    });
  }
request(https://swapi-api.alx-tools.com/api/starships/9/" + process.argv[2], function (err, res, body) {
  if (err) throw err;
  const actors = JSON.parse(body).characters;
  exactOrder(actors, 0);
});
const exactOrder = (actors, x) => {
  if (x === actors.length) return;
  request(actors[x], function (err, res, body) {
    if (err) throw err;
    console.log(JSON.parse(body).name);
    exactOrder(actors, x + 1);
  });
};
