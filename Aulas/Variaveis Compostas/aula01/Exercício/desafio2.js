/*Descrição:

Crie um array com alguns nomes de pessoas.
Encontre o primeiro nome que tenha mais de 5 caracteres.
Crie um novo array contendo a versão maiúscula de todos os nomes.
*/

let pessoas = ['João', 'Leo', 'Beatriz', 'Paulo']
let nomeGrande = pessoas.find(pessoas => pessoas.length > 5)

let nomeMaiusculo = pessoas.map(nome => nome.toLocaleUpperCase())

console.log(nomeMaiusculo)