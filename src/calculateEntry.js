const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  return entrants.reduce((classe, idade) => {
    if (idade.age < 18) {
      classe.child += 1;
    } else if
      (idade.age >= 50) {
      classe.senior += 1;
    } else
      (idade.age < 50 && idade.age >= 18) {
      classe.adult += 1;
    }
    return { child: 0, adult: 0, senior: 0 };
  }
  );

}

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
