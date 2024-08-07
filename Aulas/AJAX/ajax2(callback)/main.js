function fnajax(url, funcao){
    let request = new XMLHttpRequest()

    //  Resposta
    request.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            funcao(request)
        }
    }

    // Enviar request
    request.open('GET', url, true)
    request.send()
}

function cmd1(p){
    document.querySelector('#caixa1').innerHTML = p.responseText
}

function cmd2(p){
    document.querySelector('#caixa2').innerHTML = p.responseText
}