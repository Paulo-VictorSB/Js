/*

Objetos Aninhados

Crie um objeto chamado celular com propriedades marca, modelo e especificacoes.
especificacoes deve ser um objeto contendo ram, armazenamento e bateria.
Acesse e imprima o valor da propriedade armazenamento do objeto especificacoes.


*/

const celular = {
    marca: "Xiaomi",
    modelo: "Redmi Note 9s",
    especificacoes: {
        ram: 6,
        armazenamento: 128,
        bateria: 5020
    }
}

console.log(`Meu celular tem ${celular.especificacoes.armazenamento}gb de armazenamento interno!`)