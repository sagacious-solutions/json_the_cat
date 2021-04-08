const request = require('request');

const haltProgram = () => {
  console.log(`We've encountered a fatal error and had to exit.`)
  process.exit();
}

if (process.argv.length < 3)  {
  haltProgram();
}

const apiBreedSearch = `https://api.thecatapi.com/v1/breeds/search?`;
const breed = process.argv[2];



// console.log(breed);
// console.log(typeof body);

request(`${apiBreedSearch}q=${breed}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});





////////////////////////////////// HELPFUL ///////////////////////////////////


// GET
// /breeds/search
// Search for a Breed by using part of it’s name as the ‘q’ query parameter.

// e.g ?q=sib to search for Siberian 
// https://api.thecatapi.com/v1/breeds/search?q=sib