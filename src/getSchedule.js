const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const hExibicao1 = ((dia) => {
  species.filter('availability');
  const hExibicao2 = hExibicao1.includes(dia);
  const hExibicao3 = hExibicao2.map((name) => name);
  return hExibicao3
})

const diaFechado = () => ({
  officeHour: 'closed',
  exhibition: 'o Zoologico esta Fechado'
})

const fechado = (dia) => {
  if (dia === 'Monday') {
    return diaFechado()
  }
}

const { open, close } = hours[day];
return {
  officeHour: `Open from ${open}am until ${close}pm`,
  exhibition: animalArrExibition(day),
};



function getSchedule(scheduleTarget) {
  // seu código aqui
}

module.exports = getSchedule;
