function calcular(){
    let inicio = Number(document.querySelector('#inicio').value)
    let fim = Number(document.querySelector('#fim').value)
    let passos = Number(document.querySelector('#quantidade').value)

    let valor = inicio
    let resultado = document.querySelector('#resultado1')

    resultado.innerHTML = " "

    if(passos <= 0){
        alert('Parece que o número é menor ou igual a 0, considere 1!')
        passos = 1
    }

    if(fim < inicio){
        alert('O Fim não pode ser menor ao inicio, tente novamente.')
        return
    }

    do{
        resultado.innerHTML += `passo ${valor} `
        valor += passos
    }while(valor <= fim)
}