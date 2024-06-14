/* ----------------------------------------------------------------------------

Exercício: 006
Enunciado:
    Existem 3 botões no layout. Cada botão está associado a uma área de
    informação. O objetivo é criar a lógica que permite apresentar cada
    uma das áreas de acordo com o botão clicado.
    A área de informação um deve estar visível por padrão.

    NOTA: quando uma área é apresentada, as outras devem ficar escondidas
---------------------------------------------------------------------------- */

function informacao1(){
    
    let info1 = document.querySelector('#info1')
    let info2 = document.querySelector('#info2')
    let info3 = document.querySelector('#info3')
    info1.classList.remove('esconder')
    info2.classList.remove('esconder')
    info3.classList.remove('esconder')
    info2.classList.add('esconder')
    info3.classList.add('esconder')


}

function informacao2(){

    let info1 = document.querySelector('#info1')
    let info2 = document.querySelector('#info2')
    let info3 = document.querySelector('#info3')
    info1.classList.remove('esconder')
    info2.classList.remove('esconder')
    info3.classList.remove('esconder')
    info1.classList.add('esconder')
    info3.classList.add('esconder')
    
}

function informacao3(){

    let info1 = document.querySelector('#info1')
    let info2 = document.querySelector('#info2')
    let info3 = document.querySelector('#info3')
    info1.classList.remove('esconder')
    info2.classList.remove('esconder')
    info3.classList.remove('esconder')
    info1.classList.add('esconder')
    info2.classList.add('esconder')
    
}