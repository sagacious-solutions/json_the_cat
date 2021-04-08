const request = require('request');

const haltProgram = (error) => {
  console.log(error);
  process.exit();
};

if (process.argv.length < 3)  {
  haltProgram(`Insuffient paramters passed.`);
}

const apiBreedSearch = `https://api.thecatapi.com/v1/breeds/search?`;
const breed = process.argv[2];

let searchData = {};

// Make a request to the api for the breed. If found print out just the description, otherwise halt
request(`${apiBreedSearch}q=${breed}`, (error, response, body) => {
  searchData = JSON.parse(body);

  if (!searchData.length) {
    haltProgram(`We didn't find that breed`);
  }
  console.log(searchData[0].description);
});
