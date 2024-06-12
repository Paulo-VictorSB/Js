/* ----------------------------------------------------------------------------

Exercício: 002
Enunciado: CONTADOR COM INTERVALO DE VALORES
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    O valor nunca poderá ser inferior a -10 ou superior a 10.

---------------------------------------------------------------------------- */

function decremento(){
    let valor = document.querySelector('#valor')
    let novoValor = Number(valor.innerHTML) - 1
    
    if (novoValor >= -10){
        valor.innerHTML = novoValor
    }
}

function incremento(){
    let valor = document.querySelector('#valor')
    let novoValor = Number(valor.innerHTML) + 1
    
    if (novoValor <= 10){
        valor.innerHTML = novoValor
    }
}




