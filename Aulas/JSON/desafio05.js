// Transformação de Dados JSON
// Você tem uma lista de funcionários em formato JSON. Converta essa string JSON em um array de objetos JavaScript. Crie um novo array contendo apenas os nomes dos funcionários e suas idades aumentadas em 1 ano. Exiba o novo array no console.

const json = '[{"nome": "Alice", "idade": 28}, {"nome": "Bob", "idade": 32}, {"nome": "Charlie", "idade": 25}]'

const funcionarios = JSON.parse(json)
const nomeIdade = []
for(let i = 0; i < funcionarios.length; i++){
    nomeIdade.push(funcionarios[i].nome, funcionarios[i].idade + 1)
}
console.log(nomeIdade)