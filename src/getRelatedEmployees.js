const data = require('../data/zoo_data');

const gerenteIdNumber = ['9e7d4524-363c-416a-8759-8aa7e50c0992',
  'fdb2543b-5662-46a7-badc-93d960fdc0a8',
  '0e7b460e-acf4-4e17-bcb3-ee472265db83'];

// const valor = true;

function isManager(id) {
  // seu código aqui
  // Utilize a função isManager para verificar se a pessoa é gerente ou não e fazer as seguintes verificações
  const comparacao = gerenteIdNumber.find((chefia) => chefia === id);
  return data.employees.some((recebeValor) =>
    recebeValor.id === id && id === comparacao);
}
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function getRelatedEmployees(managerId) {
  // seu código aqui
  // Caso a pessoa seja gerente, retorne um array contendo nome e sobrenome das pessoas colaboradoras gerenciadas por essa pessoa
  const verFal = isManager(managerId);
  if (verFal === true) {
    const novoArray = [];
    data.employees.filter((funcionarios) => {
      if (funcionarios.managers.includes(managerId)) {
        employees.push(`${funcionarios.firstName} ${funcionarios.lastName}`);
      }
    });
    return novoArray;
  }

  // console.log(isManager !== true);
  // Caso a pessoa não seja gerente, dispare um erro com a mensagem: 'O id inserido não é de uma pessoa colaboradora gerente!'

  if (isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

// console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
// https://www.w3schools.com/jsref/jsref_includes_array.asp
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.includes("Mango");

module.exports = { isManager, getRelatedEmployees };