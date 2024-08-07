export class Dados {
    constructor(peso, altura) {
        this.peso = Number(peso),
        this.altura = Number(altura)
    }

    calcularIMC(){
        if (this.altura > 0){
            const calculo = this.peso / (this.altura * this.altura)
            return calculo.toFixed(2)
        } else {
            return "Altura Inválida"
        }
    }
}