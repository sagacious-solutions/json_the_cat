const request = require('request');

const haltProgram = (error) => {
  console.log(error);
  process.exit();
};

const apiBreedSearch = `https://api.thecatapi.com/v1/breeds/search?`;

const fetchBreedDescription = (breedName, callback) => {
  let searchData = {};

  // Make a request to the api for the breed. If found print out just the description, otherwise halt
  request(`${apiBreedSearch}q=${breedName}`, (error, response, body) => {
    searchData = JSON.parse(body);

    if (!searchData[0]) {
      callback(`We're unable to find that breed`, null);
    } else {
      callback(null, searchData[0].description);
    }
  });
};

module.exports = {
  fetchBreedDescription,
  haltProgram
}