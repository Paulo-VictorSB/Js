/* ----------------------------------------------------------------------------

Exercício: 004
Enunciado: TRÊS SLIDERS COM VALORES INDEPENDENTES
    
    Estão disponíveis três input ranges e respetivas áreas de apresentação dos valores.
    Criar os mecanismos que permitem visualizar os valores dos sliders.
    Todos os sliders devem variar entre 0 e 100. Essas propriedades devem ser
    definidas através do JavaScript.

---------------------------------------------------------------------------- */

function range1(){
    let range = Number(document.querySelector('#range_1').value)
    let value = document.querySelector('#value_1')

    if (range >= 0 && range <= 100){
        value.innerHTML = range
    }
}

function range2(){
    let range = Number(document.querySelector('#range_2').value)
    let value = document.querySelector('#value_2')

    if (range >= 0 && range <= 100){
        value.innerHTML = range
    }
}

function range3(){
    let range = Number(document.querySelector('#range_3').value)
    let value = document.querySelector('#value_3')

    if (range >= 0 && range <= 100){
        value.innerHTML = range
    }
}
