const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (animal === undefined) {
    // se o amimal for igual a indefinido, ele vai percorrer o arrei e vai retornar as especies e a quantidade
    return species.reduce((accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.residents.length;
      return accumulator;
    }, {});
    // reduce retirado da aula 8.4
    // reduce((accumulator, currentValue, currentIndex, array) => { /* ... */ }, initialValue )
  }

  if (animal.sex) { // retorna o parametro sex e a quantidade de animais
    return species
      .filter((bichu) => bichu.name === animal.specie)[0]
      .residents.filter((bichu) => bichu.sex === 'female').length;
  }
  // pega a especie recebida por parametro e retorna a quantidade de animais
  return species.filter((bichu) => bichu.name === animal.specie)[0].residents
    .length;
}
// seu código aqui

console.log(countAnimals());

module.exports = countAnimals;
