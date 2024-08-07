// Conversão de Dados Complexos
// Você tem uma lista de pedidos com itens e quantidades em formato JSON. Converta essa string JSON em um array de objetos JavaScript. Para cada pedido, calcule o total de itens e exiba o resultado no console.

const json = '[{"pedido": 1, "itens": [{"produto": "Item A", "quantidade": 2}, {"produto": "Item B", "quantidade": 3}]}, {"pedido": 2, "itens": [{"produto": "Item C", "quantidade": 1}, {"produto": "Item D", "quantidade": 4}]}]'

const pedidos = JSON.parse(json)

pedidos.forEach(pedido => {
let totalItens = 0;
pedido.itens.forEach(item => {
    totalItens += item.quantidade;
});
pedido.totalItens = totalItens;
});


pedidos.forEach(pedido => {
console.log(`Pedido ${pedido.pedido}: Total de itens = ${pedido.totalItens}`);
});