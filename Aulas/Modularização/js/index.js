import { Dados } from './Dados.js';

const peso = document.querySelector('#iPeso');
const altura = document.querySelector('#iAltura');
const bCalcular = document.querySelector('#bCalcular');
const resultado = document.querySelector('#resultado');

bCalcular.addEventListener('click', () => {
    const dados = new Dados(peso.value, altura.value);
    const imc = dados.calcularIMC();
    resultado.innerHTML = `Seu IMC é de ${imc}`;
});
