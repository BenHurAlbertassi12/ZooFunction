const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const idadeAnimalOlder = data.species.forEach((racas) => {
    if (racas.name === animal) {
      return racas.residents.some(residents) >= age);
    }
  });
}
console.log(getAnimalsOlderThan());

module.exports = getAnimalsOlderThan;
