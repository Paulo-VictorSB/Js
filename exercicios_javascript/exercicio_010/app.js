/* ----------------------------------------------------------------------------

Exercício: 010
Enunciado:
    Existem 4 áreas a cinza.
    Ao clicar numa das áreas a área clicada deve ficar com fundo
    amarelo e as restantes a vermelho.
---------------------------------------------------------------------------- */

function check(number){
    let box1 = document.querySelector('#box1')
    let box2 = document.querySelector('#box2')
    let box3 = document.querySelector('#box3')
    let box4 = document.querySelector('#box4')

    box1.style.backgroundColor = 'yellow'
    box2.style.backgroundColor = 'yellow'
    box3.style.backgroundColor = 'yellow'
    box4.style.backgroundColor = 'yellow'

    if (number === 1){
        box1.style.backgroundColor = 'red'
    } else if (number === 2){
        box2.style.backgroundColor = 'red'
    } else if (number === 3){
        box3.style.backgroundColor = 'red'
    } else {
        box4.style.backgroundColor = 'red'
    }
}
