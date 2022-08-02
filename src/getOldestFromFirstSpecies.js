const data = require('../data/zoo_data');
// const novaArray = [];

function getOldestFromFirstSpecies(id) {
  const funcionario = data.employees.find((ctps) => ctps.id === id);
  const animais = funcionario.find(responsibleFor({}));
  return animais { };
}
// console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));

module.exports = getOldestFromFirstSpecies;
