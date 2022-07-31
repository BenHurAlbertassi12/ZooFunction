const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(firstName, lastName, ...employeeName) {
  // seu código aqui
  if (employeeName.length === 0) return {};
  // for (let index = 0; index < employeeName.length; index += 1) {
  if ((employees.find(firstName) === employeeName) || (employees.find(lastName) === employeeName)) {
    return getEmployeeByName(employeeName);
  }
}

// ✓ sem parâmetros, retorna um objeto vazio (3ms)
// ✕ quando provido o primeiro nome da pessoa colaboradora, retorna o objeto da pessoa colaboradora (3ms)
// ✕ quando provido o último nome da pessoa colaboradora, retorna o objeto da pessoa colaboradora (1ms)

module.exports = getEmployeeByName;
