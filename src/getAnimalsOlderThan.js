const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const idadeAnimalOlder = data.species.forEach((racas) => {
    if (racas.name === animal) {
      return racas = (data.species.residents.age >= age);
    }
  });
}
console.log(getAnimalsOlderThan());

module.exports = getAnimalsOlderThan;
