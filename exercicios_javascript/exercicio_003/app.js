/* ----------------------------------------------------------------------------

Exercício: 003
Enunciado: CONTADOR COM CORES PARA NEGATIVOS, ZERO E POSITIVOS
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    No caso do valor ser zero o texto deve ser branco.
    No caso do valor ser negativo o texto deve ser vermelho puro.
    No caso do valor ser positivo o texto deve ser verde puro.

---------------------------------------------------------------------------- */

function decremento(){
    let = valor = document.querySelector('#valor')
    let = novoValor = Number(valor.innerHTML) - 1
    valor.innerHTML = novoValor

    if (novoValor < 0) {
        valor.style.color = 'red'
    } else if (novoValor > 0) {
        valor.style.color = 'green'
    } else {
        valor.style.color = 'white'
    }

}

function incremento(){
    let valor = document.querySelector('#valor')
    let novoValor = Number(valor.innerHTML) + 1 
    valor.innerHTML = novoValor

    if (novoValor < 0) {
        valor.style.color = 'red'
    } else if (novoValor > 0) {
        valor.style.color = 'green'
    } else {
        valor.style.color = 'white'
    }
}


let valorElement = document.querySelector('#valor')
valorElement.style.color = 'white'