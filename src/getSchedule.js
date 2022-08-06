const { species, hours } = require('../data/zoo_data');
// const data = require('../data/zoo_data');

const exibicaoAnimal = (dia) => species.filter(({ availability }) =>
  availability.includes(dia)).map((name) => name.name);

// variavel para retorno, se o dia estiver fechado retorna para ca com as frases
const diaFechado = () => ({
  // frases ditas pelo npm test.
  exhibition: 'The zoo will be closed!',
  officeHour: 'CLOSED',
});

const retDiaAberto = (diaSem) => {
  if (diaSem === 'Monday') return diaFechado();
  // { open, close } recebidos do zoo_data.js
  const { open, close } = hours[diaSem];
  // nomes do retorno definidos pelo readme
  // frases dos objetos retiradas do npm test
  return {
    exhibition: exibicaoAnimal(diaSem),
    officeHour: `Open from ${open}am until ${close}pm`,
  };
};

// console.log(retDiaFechado());

function getSchedule(scheduleTarget) {
  // seu código aqui
  const dataHora = Object.keys(hours);
  const animal = species.map((name) => name.name);

  if (dataHora.includes(scheduleTarget)) {
    return {
      [scheduleTarget]: retDiaAberto(scheduleTarget),
    };
  }
  // se o dia for igual a uma segunda-feira ele vai retornar as frases da variavel de retorno 'retDiaAberto'
  if (scheduleTarget === 'Monday') {
    return { Monday: retDiaAberto() };
  }
  // se for passado um animal, deverá retornar um array com os dias em que ele está em exibição
  if (animal.includes(scheduleTarget)) {
    return species.filter((name) => name.name === scheduleTarget)[0].availability;
  }
  return dataHora.reduce((animall, diia) => ({ ...animall, [diia]: retDiaAberto(diia) }), []);
}
// console.log(getSchedule('lions'));

module.exports = getSchedule;
