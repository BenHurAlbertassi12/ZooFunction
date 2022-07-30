const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const idadeAnimalOlder = data.species.forEach((racas) => {
    if (racas.name === animal) {
      return idadeAnimalOlder.residents.some((residents) => {
        if (residents.age >= age) {
          return idadeAnimalOlder;
        }
      });
    }
  });
}

// console.log(getAnimalsOlderThan());

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/every#testing_typed_array_elements_using_arrow_functions

module.exports = getAnimalsOlderThan;
