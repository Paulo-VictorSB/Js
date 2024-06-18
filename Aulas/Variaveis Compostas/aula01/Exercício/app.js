// Exercício: Manipulação de Arrays
// Criação de um Array:

// Crie um array vazio chamado meuArray.

let meuArray = []

// Adicione os números de 1 a 5 ao meuArray.

meuArray.push(1,2,3,4,5)
// console.log(meuArray)

// Adição e Remoção de Elementos:

// Adicione o número 6 ao final do meuArray.

// meuArray.push(6)
// console.log(meuArray)

// Adicione o número 0 ao início do meuArray.

// meuArray.unshift(0)
// console.log(meuArray)

// Remova o último elemento do meuArray.

// meuArray.pop()
// console.log(meuArray)

// Remova o primeiro elemento do meuArray.

// meuArray.shift()
// console.log(meuArray)

// Iteração sobre o Array:

// Use um loop for para iterar sobre o meuArray e imprimir cada elemento no console.

// for (let i = 0; i < meuArray.length; i++) {
//     console.log(meuArray[i]);
// }

// Manipulação de Elementos:

// Multiplique cada elemento do meuArray por 2 e armazene os resultados em um novo array chamado meuArrayMultiplicado.

// let meuArrayMultiplicado = meuArray.map(element => element * 2)
// console.log(meuArrayMultiplicado)

// Funções Integradas:

// Use o método map para criar um novo array que contenha o quadrado de cada elemento de meuArray.
// let meuArrayQuadrado = meuArray.map(element => element * element)
// console.log(meuArrayQuadrado)
// Use o método filter para criar um novo array que contenha apenas os elementos de meuArray que são maiores que 2.
// let filter = meuArray.filter(element => element > 2)
// console.log(filter)
// Use o método reduce para encontrar a soma de todos os elementos em meuArray.

// let soma = meuArray.reduce(function(acumulador, valorAtual) {
//     return acumulador + valorAtual
// }, 0)
// console.log(soma)