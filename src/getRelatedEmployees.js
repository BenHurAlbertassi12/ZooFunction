const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui

  const gerente = ['9e7d4524-363c-416a-8759-8aa7e50c0992',
    'fdb2543b-5662-46a7-badc-93d960fdc0a8',
    'fdb2543b-5662-46a7-badc-93d960fdc0a8'];
  const comparacao = gerente.find((chefia) => chefia === id);
  return data.employees.some((recebeValor) =>
    recebeValor.id === id && id === comparacao);
}
function getRelatedEmployees(managerId) {
  // seu código aqui
}
// const gerentes = {
//   stephanieId: '9e7d4524-363c-416a-8759-8aa7e50c0992',
//   olaId: 'fdb2543b-5662-46a7-badc-93d960fdc0a8',
//   burlId: '0e7b460e-acf4-4e17-bcb3-ee472265db83',
// };

// let valor = true;

// for (let index = 0; index < gerente.length; index += 1) {
//   if (index[0] === id) {
//     return false;
//   }
// return = false;

module.exports = { isManager, getRelatedEmployees };
