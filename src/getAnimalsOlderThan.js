const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const idadeAnimal = data.species.forEach((racas) => {
    if (racas === animal) {
      return idadeAnimal;
    }
  });
}
console.log(getAnimalsOlderThan(idadeAnimal));

module.exports = getAnimalsOlderThan;
