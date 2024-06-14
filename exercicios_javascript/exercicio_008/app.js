/* ----------------------------------------------------------------------------

Exercício: 008
Enunciado:
    Existem 5 botões, cada um com uma cor diferente do Bootstrap.
    A ideia é criar o código javascript que permita que o clique em cada
    um dos botões altere o texto acima para a cor de fundo do botão.
---------------------------------------------------------------------------- */

let h3 = document.querySelector('#h3')
function btn1(){
    h3.classList.add('btn-primary')
}
function btn2(){
    h3.classList.add('btn-info')
}
function btn3(){
    h3.classList.add('btn-success')
}
function btn4(){
    h3.classList.add('btn-danger')    
}
function btn5(){
    h3.classList.add('btn-warning')
}