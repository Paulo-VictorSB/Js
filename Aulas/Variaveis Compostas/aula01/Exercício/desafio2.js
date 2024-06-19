/*Descrição:

Crie um array com alguns nomes de pessoas.
Encontre o primeiro nome que tenha mais de 5 caracteres.
Crie um novo array contendo a versão maiúscula de todos os nomes.
*/

let pessoas = ['joao', 'carlo', 'pedro', 'augusto']
console.log(pessoas)

let nomeGrande = pessoas.find(element => element.length >= 5)
console.log(nomeGrande)

let nomeMaiuscula = pessoas.map(element => element.toUpperCase())
console.log(nomeMaiuscula)