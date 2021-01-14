const request = require('request');
const breedToSearch = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedToSearch}`, (err, response, body) => {
  if (err) throw err;
  const data = JSON.parse(body);
  console.log(data.length !== 0 ? data[0].description : "BREED NOT FOUND");
});