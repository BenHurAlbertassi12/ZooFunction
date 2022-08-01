const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const gerentes = data.filter(['stephanieId', 'olaId', 'burlId']);
  let comparacao = gerentes.find((chefia) => chefia === id)
  return data.employees.some((recebeValor) =>
    recebeValor.id === comparacao && comparacao === id);
}

// retorna fals se o id passado não é de um gerente
// const gerente = ['9e7d4524-363c-416a-8759-8aa7e50c0992',
//   'fdb2543b-5662-46a7-badc-93d960fdc0a8',
//   'fdb2543b-5662-46a7-badc-93d960fdc0a8'];

// let valor = true;

// for (let index = 0; index < gerente.length; index += 1) {
//   if (index[0] === id) {
//     return false;
//   }
// return = false;

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
