/* ----------------------------------------------------------------------------

Exercício: 009
Enunciado:
    Exercício simples: O texto é branco e o elemento range vai servir para
    alterar a transparência do texto. Do valor mais opaco à esquerda, até
    à transparência total à direita.

    NOTA: Deves definir os valores do range.
---------------------------------------------------------------------------- */

// function mover(){
//     let range = Number(document.querySelector('#range').value)
//     let h3 = document.querySelector('h3')
//     let text = document.querySelector('#text')

//     text.innerHTML = range
//     h3.style.opacity = range + '%'
// }

function mover() {
    let range = Number(document.querySelector('#range').value);
    let h3 = document.querySelector('h3');
    let text = document.querySelector('#text');

    text.innerHTML = range;
    h3.style.opacity = (100 - range) / 100;
}
