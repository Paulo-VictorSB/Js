// Desafio 1: Conversão de Objeto para JSON
// Crie um objeto JavaScript que represente um estudante com as seguintes propriedades: nome, idade, curso, e disciplinas (um array de strings). Converta esse objeto em uma string JSON e exiba-o no console.

const estudante = {
    nome: "Paulo Victor",
    idade: 19,
    curso: "Desenvolvimento WEB"
}

const estudanteJSON = JSON.stringify(estudante)

console.log(estudanteJSON)