const data = require('../data/zoo_data');

function getEmployeeByName(...employeeName) {
  // seu código aqui
  if (employeeName.length === 0) return {};
  return employeeName.map((colaboradores) => 
  data.employees.find(()=>)

}

module.exports = getEmployeeByName;
