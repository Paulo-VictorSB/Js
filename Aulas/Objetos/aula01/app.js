/*

Criação e Manipulação de Objetos

Crie um objeto chamado livro com propriedades titulo, autor e ano.
Adicione uma nova propriedade editora ao objeto livro.
Modifique o valor da propriedade ano.
Exclua a propriedade editora.

*/

const livro = {
    titulo: "Entendendo Algoritmos: Um Guia Ilustrado Para Programadores e Outros Curiosos",
    autor: "Aditya Y. Bhargava",
    ano: 2017,
}

livro.editora = "Novatec Editora"

livro.ano = 2024

delete livro.editora

console.log(livro)
