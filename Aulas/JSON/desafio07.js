// Atualização de Dados
// Você tem uma lista de clientes em formato JSON. Converta essa string JSON em um array de objetos JavaScript. Encontre um cliente específico pelo nome e atualize seu endereço. Exiba o array atualizado no console.

const json = '[{"nome": "Lucas", "endereco": "Rua A"}, {"nome": "Mariana", "endereco": "Rua B"}, {"nome": "Pedro", "endereco": "Rua C"}]'

const clientes = JSON.parse(json)
const alteracao = clientes.filter((user)=> user.nome == "Mariana")
alteracao.forEach(dados => {
    dados.endereco = "Rua D"
});

console.log(alteracao)
