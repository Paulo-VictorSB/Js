/*

Métodos em Objetos

Crie um objeto chamado aluno com as propriedades nome, idade e curso.
Adicione um método chamado apresentacao que imprima uma mensagem com o nome e o curso do aluno.

*/

const aluno = {
    nome: "Paulo Vicotr",
    idade: 19,
    curso: "Js com ChatGPT",
    apresentacao: function(){
        console.log(`Olá, meu nome é ${this.nome}! E eu estou estudando "${this.curso}" atualmente.`)
    }
}

aluno.apresentacao()