/* ----------------------------------------------------------------------------

Exercício: 005
Enunciado: TRÊS SLIDERS COM VALORES INDEPENDENTES - VERSÃO CÓDIGO REDUZIDO
    
    O exercício anterior, mas com quantidade de código JS reduzida.

---------------------------------------------------------------------------- */

function updateValue(event) {
    const rangeInput = event.target;
    const valueSpan = document.querySelector(`#value_${rangeInput.id.split('_')[1]}`);
    const rangeValue = Number(rangeInput.value);

    if (rangeValue >= 0 && rangeValue <= 100) {
        valueSpan.innerHTML = rangeValue;
    }
}

document.querySelectorAll('input[type="range"]').forEach(input => {
    input.addEventListener('input', updateValue);
});