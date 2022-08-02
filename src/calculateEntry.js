const data = require("../data/zoo_data");

function countEntrants(entrants) {
  // seu código aqui
  return entrants.reduce((categoria, idade) => {
    if (idade.age < 18) {
      categoria.child += 1;
    } else if (idade.age < 50 && idade.age >= 18) {
      categoria.adult += 1;
    } else (idade.age > 50)
    categoria.senior += 1;
  }); // chave do retorno
  { child: 0, adult: 0, senior: 0 }
} // chaves inicial

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
