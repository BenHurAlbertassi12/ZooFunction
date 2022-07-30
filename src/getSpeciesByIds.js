// const { species } = require('../data/zoo_data');
// esta linha brotou quando eu coloquei '.find', mas o lint não deixa passar
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  // caso receba nenhum parâmetro, é necessário retornar um array vazio.
  if (ids.length === 0) return [];
  return ids.map((bicho) => data.species.find((raca) => raca.id === bicho));
}
console.log('info do sapinho', getSpeciesByIds('89be95b3-47e4-4c5b-b687-1fabf2afa274'));
module.exports = getSpeciesByIds;

// fiz este exercicio com a ajuda do video:
// Aula CHSD024a - Aula 8.3 map e filter. Tempo inicial aproximado 1h25min
