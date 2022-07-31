const { employees } = require('../data/zoo_data');
// const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};

  return employees.find((nik) =>
    nik.firstName === employeeName || nik.lastName === employeeName);
}

console.log(getEmployeeByName('Wilburn'));
console.log(getEmployeeByName('Burl'));

// função dava errada a todo momento pois adcionei no inicio do parametro uma '...'
// para pegar todos os dados, dava conflito e não sabia como resolver.
// outro pepino que deu foi alterar o codigo inicial (qua havia dado certo),
// ao invez de fazer uma comparação com 0 utilizar o undefined

module.exports = getEmployeeByName;
