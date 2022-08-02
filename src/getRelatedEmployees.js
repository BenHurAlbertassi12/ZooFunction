const data = require('../data/zoo_data');

const gerente = ['9e7d4524-363c-416a-8759-8aa7e50c0992',
  'fdb2543b-5662-46a7-badc-93d960fdc0a8',
  'fdb2543b-5662-46a7-badc-93d960fdc0a8'];

function isManager(id) {
  // seu código aqui
  // Utilize a função isManager para verificar se a pessoa é gerente ou não e fazer as seguintes verificações
  const comparacao = gerente.find((chefia) => chefia === id);
  return data.employees.some((recebeValor) =>
    recebeValor.id === id && id === comparacao);
}
function getRelatedEmployees(managerId) {
  // seu código aqui
  // Caso a pessoa seja gerente, retorne um array contendo nome e sobrenome das pessoas colaboradoras gerenciadas por essa pessoa
  if (managerId(isManager) === true) {
    const funcionario = data.employees.filter((funcionarios) =>
      funcionarios.managers.push((isManager)));
    return funcionario.map((funcionarios) => `${funcionarios.firstName}${funcionarios.lastName}`);
  }
}
// https://www.w3schools.com/jsref/jsref_push.asp
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi", "Lemon");

module.exports = { isManager, getRelatedEmployees };
