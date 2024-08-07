window.onload = function(){
    let box = document.querySelector('#box')    
    let button = document.querySelector('#botao')

    button.addEventListener('click', botao_click)

    function botao_click(){

        // Criando o objeto request
        let request = new XMLHttpRequest()

        // Definindo a funcao que vai ser executada mediante a resposta

        request.onreadystatechange = () => {
            if(request.readyState === 4) {
                if(request.status === 200) {
                    box.innerHTML = request.responseText
                } else {
                    box.innerHTML = "Tente mais tarde"
                }
            }
        }

        // Prepara o pedido
        request.open("GET", "main.php?n=Paulo&a=Victor", true)

        // Envia o pedido
        request.send()

    }
}


