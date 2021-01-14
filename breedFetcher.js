const request = require('request');

const fetchBreedDescription = (breed, callback) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, response, body) => {
    if (err) {
      callback(err, null);
    } else {
      const data = JSON.parse(body);
      callback(null, data.length !== 0 ? data[0].description : "BREED NOT FOUND");
    }
  });
};

module.exports = { fetchBreedDescription };