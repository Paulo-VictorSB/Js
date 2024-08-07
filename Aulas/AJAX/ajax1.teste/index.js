window.onload = ()=>{
    let campoEmail = document.querySelector('#emailInput')
    let checar = document.querySelector('#check')

    checar.addEventListener('click', validar)

    function validar(){
        let regex = /^([a-z0-9\.\-]{2,})@([a-z0-9]{2,})(\.[a-z]{2,})$/
        let request = new XMLHttpRequest()
        console.log("Classe XML Criada")
        console.log("Iniciando Verificações.")
        if(campoEmail.value != '' && regex.test(campoEmail.value)){
            request.open("GET", "valido.txt", true)
            console.log(`Email digitado: ${campoEmail.value}, seu email é valido, logado com sucesso.`)
        } else {
            request.open("GET", "error.txt", true)
            console.log(`Email digitado inválido: ${campoEmail.value}, não pode conter "!@#$%¨&*/°º:;|\" Por favor, tente novamente.`)
        }
        
        request.onreadystatechange = ()=> {
            if (request.readyState == 4 && request.status == 200) {
                document.querySelector('#resultado').innerHTML = request.responseText
            }
        }
        request.send()
    }
}



