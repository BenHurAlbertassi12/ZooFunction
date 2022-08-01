const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  if (id === data.employees.managers) return true;
  if (id !== data.employees.managers) return false;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
