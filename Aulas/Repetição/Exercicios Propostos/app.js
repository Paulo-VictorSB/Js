// let numero = 1
// let multiplicador = 0

// do {
//     console.log(`${numero} x ${multiplicador} = `, numero*multiplicador)
//     multiplicador++
// } while(multiplicador <= 10)

function calcular(){
    let numero = Number(document.querySelector('#numeroValue').value)
    let multiplicador = 1
    let resultado = ''
    
    do {
        resultado += `${numero} x ${multiplicador} = ${numero*multiplicador}<br>`
        multiplicador++
    } while (multiplicador <= 10)

    document.querySelector('#resultado').innerHTML = resultado
}


