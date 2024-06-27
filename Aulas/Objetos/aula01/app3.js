/*

Iteração sobre Propriedades de um Objeto

Crie um objeto chamado pessoa com as propriedades nome, idade, profissao e cidade.
Use um loop for...in para imprimir todas as propriedades e seus valores.

*/

const pessoa = {
    nome: "Aline Silva",
    idade: 19,
    profissao: "Jovem Aprendiz",
    cidade: "Recife"
}

for (let key in pessoa) {
    console.log(`${key}: ${pessoa[key]}`)
}