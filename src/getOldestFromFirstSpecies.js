const data = require('../data/zoo_data');
// const novaArray = [];

function getOldestFromFirstSpecies(id) {
  const funcionario = data.employees.find((ctps) => ctps.id === id);
  const funcionarioResponsavel = funcionario.responsibleFor[0];
  const animais = data.species.find((especie) => especie.id === funcionarioResponsavel);
  const idadeMaior = animais.residents.sort((maior, menor) => menor.age - maior.age);
  return [idadeMaior[0].name, idadeMaior[0].sex, idadeMaior[0].age];
}
// separei em 4 variaveis diferentes
// funcionario - que vai pegar minha id e comparar com o parametro recebido
// funcionarioResponsavel - pega a variavel 'funcionario' e localiza o array do caminho 'responsibleFor[0]'
// animais - para buscar (find) pelo parametro o id parecido com 'funcionarioResponsavel'
// idadeMaior - para organizar os numero recebidos,
// no inicio coloquei (maior.age - menor.age) mas não passou, alterei a ordem para passar no teste.

console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
module.exports = getOldestFromFirstSpecies;
