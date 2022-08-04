const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const horarioExibição = (dia) => species.filter((availability) =>
  availability.includes(dia)).map(name) => name;

const fechado = (day) => {
  if (day === 'Monday') {
    return mondayClose()
  }
}

function getSchedule(scheduleTarget) {
  // seu código aqui
}

module.exports = getSchedule;
