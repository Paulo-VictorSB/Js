// Desafio 3: Estatísticas Simples
// Descrição:

// Crie um array com 10 números aleatórios entre 1 e 100.
// Calcule a soma de todos os números.
// Calcule a média dos números.
// Encontre o maior e o menor número.

let array = [1, 10, 20, 30, 50, 35, 70, 50, 40, 5]
let soma = array.reduce((total, numero) => total + numero, 0);
console.log(soma)

let media = soma / array.length
console.log(media)

let maior = Math.max(...array)
console.log(maior)

let menor = Math.min(...array)
console.log(menor)
