function executar(){

    // ajax
    let request = new XMLHttpRequest()


    // resposta
    request.onreadystatechange = ()=>{
        if(request.readyState == 4){
            if(request.status == 200){
                let dados =  request.responseXML
                let clientes = dados.getElementsByTagName('cliente')
                let nome = dados.getElementsByTagName('nome')
                let contato = dados.getElementsByTagName('contato')
                let apresentar = document.querySelector('#caixa1')
                let content = '<h2>CLIENTES</h2>'
                for(let i = 0; i < clientes.length; i++){
                    content += `<p>Nome: ${nome[i].innerHTML}</p>`
                    content += `<p>Contato: ${contato[i].innerHTML}</p>`
                    content += `<hr>`
                }
                apresentar.innerHTML = content
            }
        }
    }

    // pedido
    request.open('GET', 'dados.xml', true)
    request.send()
}