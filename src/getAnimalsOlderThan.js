const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const idadeAnimalOlder = data.species.find((raca) =>
    raca.name === animal);
  return idadeAnimalOlder.residents.every((residents) =>
    residents.age >= age);
}
// console.log(getAnimalsOlderThan());

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/every#testing_typed_array_elements_using_arrow_functions

module.exports = getAnimalsOlderThan;
