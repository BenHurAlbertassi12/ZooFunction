const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  // caso receba nenhum parâmetro, é necessário retornar um array vazio.
  if (ids.length === 0) return [];
  // ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id
  return ids.map ((bicho) => 
  data.species.find => species.id === bicho)
}
  // ao receber mais de um id, retorna um array com as espécies referentes aos ids.
console.log(bicho);
module.exports = getSpeciesByIds;

// fiz este exercicio com a ajuda do video:
// Aula CHSD024a - Aula 8.3 map e filter. Tempo inicial aproximado 1h25min
