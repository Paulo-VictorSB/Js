// Desafio 4: Filtro de Dados JSON
// Você tem uma lista de produtos em formato JSON. Converta essa string JSON em um array de objetos JavaScript. Filtre os produtos que têm um preço maior que 20 e exiba o nome e o preço desses produtos no console.

const json = '[{"nome": "Produto A", "preco": 10}, {"nome": "Produto B", "preco": 25}, {"nome": "Produto C", "preco": 30}]'

const listaProdutos = JSON.parse(json)
const maisCaros = listaProdutos.filter((user) => user.preco > 20)
for(let i = 0; i < maisCaros.length; i++){
    console.log(`Nome: ${maisCaros[i].nome}, Preço: ${maisCaros[i].preco}`)
}