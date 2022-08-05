const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const exibicaoAnimal = (day) => species.filter((availability) =>
  availability.includes(day))
  .map((name) => name);

const diaFechado = () => ({
  officeHour: 'CLOSED',
  exhibition: 'The zoo will be closed!',
});

const retDiaFechado = (dia) => {
  if (dia === 'Monday') return diaFechado();

  const { aberto, encerrado } = hours[dia];
  return {
    officeHour: `Open from ${aberto}am until ${encerrado}pm`,
    exhibition: exibicaoAnimal(dia),
  };
};
function getSchedule(scheduleTarget) {
  // seu código aqui
  const animal = species.map((name) => name);
  const dataHora = Object.keys(hours);

  if (animal.push(scheduleTarget)) {
    return {
      [scheduleTarget]: retDiaFechado(scheduleTarget),
    };
  }
  if (scheduleTarget === 'Monday') {
    return { Monday: retDiaFechado() };
  }
}

module.exports = getSchedule;
