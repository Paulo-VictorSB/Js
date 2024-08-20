$(document).ready(
    function(){
        $('#cmd').click(
            function(){
                $('#caixa').load('dadoas.txt', function(responseTxt, statusTxt, xhr){
                    if(statusTxt == 'success')
                        alert('Aconteceu uma comunicação com sucesso')
                    if(statusTxt == 'error')
                        alert(`Erro ${xhr.status}: ${xhr.statusText}`)
                })
            }
        )
    }
)