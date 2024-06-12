function calcular(){

    let valores = Number(document.querySelector('#valores').value)
    let valoresD = Number(document.querySelector('#valoresD').value)
    let resultado = document.querySelector('#resultado')
    let i = 1    
    
    resultado.innerHTML = ''

    if(valoresD != ''){
        while(i <= 10){
            let calculo = `${valoresD} X ${i} = ${valoresD*i}<br>`
            resultado.innerHTML += calculo
            i++
        }
    } else{
        while(i <= 10){
            let calculo = `${valores} X ${i} = ${valores*i}<br>`
            resultado.innerHTML += calculo
            i++
        }
    }
    
}