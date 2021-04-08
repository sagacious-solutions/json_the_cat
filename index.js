const catAPI = require('./breedFetcher');

if (process.argv.length < 3) {
  catAPI.haltProgram(`Insuffient paramters passed.`);
}
const breedName = process.argv[2];

//console.log(fetchBreedDescription(breedName));

catAPI.fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

//console.log(breedDescription);

//console.log(breedDescription);

