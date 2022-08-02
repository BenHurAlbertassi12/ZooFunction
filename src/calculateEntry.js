// const { prices } = require("../data/zoo_data");
// const data = require("../data/zoo_data");

function countEntrants(entrants) {
  // seu código aqui
  const child = entrants.filter((pessoinha) => pessoinha.age < 18).length;
  const adult = entrants.filter((pessoinha) => pessoinha.age >= 18 && pessoinha.age < 50).length;
  const senior = entrants.filter((pessoinha) => pessoinha.age >= 50).length;

  return { child, adult, senior };
}
const precoCrianca = 20.99;
const precoAdulto = 49.99;
const precoVeio = 24.99;
function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  const valorTotal = {
    child: (countEntrants(entrants).child * precoCrianca),
    adult: (countEntrants(entrants).adult * precoAdulto),
    senior: (countEntrants(entrants).senior * precoVeio),
  };
  return valorTotal.child + valorTotal.adult + valorTotal.senior;
}

module.exports = { calculateEntry, countEntrants };
