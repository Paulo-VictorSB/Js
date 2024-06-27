class GM {
    constructor(modelo, ano){
        this.modelo = modelo
        this.ano = ano
    }

    apresentacao() {
        console.log(`meu carro é da GM e ${this.modelo} é o modelo dele, fora o ano que é ${this.ano}`)
    }
}


class KM extends GM {
    constructor(modelo, ano, km){
        super(modelo, ano)
        this.km = km
    }

    apresentacao() {
        console.log(`meu carro é da GM e ${this.modelo} é o modelo dele, fora o ano que é ${this.ano} e ele é ${this.km}KM`)
    }
}

let meuCarro = new KM('Onix LT Turbo', 2024, 0)
meuCarro.apresentacao()