/*Descrição:

Crie um array com os números de 1 a 10.
Remova os números pares e mantenha apenas os ímpares.
Adicione os números de 11 a 15 ao final do array.
Inverta a ordem dos elementos no array.
*/

let array = [1,2,3,4,5,6,7,8,9,10]
console.log(array)

let arrayImpares = array.filter(num => num % 2 !== 0)
console.log(arrayImpares)

array.push(11,12,13,14,15)
console.log(array)

array.reverse()
console.log(array)
