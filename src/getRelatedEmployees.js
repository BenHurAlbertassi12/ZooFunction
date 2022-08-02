const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

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
const novaArray = [];

function getRelatedEmployees(managerId) {
  const preco = isManager(managerId);
  if (preco !== false) {
    employees.forEach((pessoinha) => {
      // escolha do forEach pois o 'find', 'map', 'filer' sempre espera retorno
      if (pessoinha.managers.includes(managerId)) {
        novaArray.push(`${pessoinha.firstName} ${pessoinha.lastName}`);
      }
    });
    return novaArray;
  }

  if (preco !== true) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}
// codigo dando erro, proucurei meu amigo Vinicio Barreto ele me ajudou,
// basicamente o codigo não estava indo pois a forma que fiz o if
// não estava retornando o valor necessario.
// criei uma nova constante e joguei o valor para dedntro dela.

// console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
// https://www.w3schools.com/jsref/jsref_includes_array.asp
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.includes("Mango");

module.exports = { isManager, getRelatedEmployees };
