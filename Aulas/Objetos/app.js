class Pessoa {
    constructor(nome, idade) {
        this.nome = nome,
        this.idade = idade
    }

    saudacao() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos de idade.`)
    }
}

let pessoa1 = new Pessoa('Paulo Victor', 19)
pessoa1.saudacao()

let pessoa2 = new Pessoa('Aline Silva', 19)
pessoa2.saudacao()