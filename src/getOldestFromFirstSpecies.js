const data = require('../data/zoo_data');
// const novaArray = [];

function getOldestFromFirstSpecies(id) {
  const funcionario = data.employees.find((ctps) => ctps.id === id).responsibleFor[0];
  const animais = data.species.filter((especie) => especie.id === funcionario);
  const idadeMaior = animais.residents.reduceRight((previousValue, currentValue) => {
    if (currentValue.age > previousValue.age) return previousValue;
    return currentValue;
  });
  return [`${idadeMaior.name} ${idadeMaior.sex} ${idadeMaior.age}`];
}
// console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));

module.exports = getOldestFromFirstSpecies;
