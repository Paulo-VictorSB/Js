function calcular() {
    let numeroAMultiplicar = Number(document.querySelector('#numeroAMultiplicar').value);
    let multiplicador = Number(document.querySelector('#multiplicador').value);
    let resultadoContainer = document.querySelector('#resultado-container');
    resultadoContainer.innerHTML = ''; // Limpa os resultados anteriores

    let i = 1;
    do {
        let resultado = `${numeroAMultiplicar} x ${i} = ${numeroAMultiplicar * i}`;
        let p = document.createElement('p');
        p.textContent = resultado;
        resultadoContainer.appendChild(p);
        i++;
    } while (i <= multiplicador);
}

