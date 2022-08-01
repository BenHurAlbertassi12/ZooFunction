const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  // retorna fals se o id passado não é de um gerente
  if (id !== data.employees.managers) return false;
  const eGerente = true;
  if (id !== data.employees.isManager) return eGerente;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
