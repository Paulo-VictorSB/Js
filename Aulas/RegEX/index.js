const validEmail = /^([a-z0-9\.]){2,}@([a-z0-9]){2,}([\.a-z]){2,}([\.a-z]){2,}?$/;
const validNumero = /^([0-9]){2}9([0-9]){8}$/;

const check = document.querySelector('#checar')
check.addEventListener('click', ()=>{

    const email = document.querySelector('#email').value
    const numero = document.querySelector('#numero').value

    const emailSituation = document.querySelector('#emailsituation')
    emailSituation.innerHTML = ''

    function emailInvalido(){
        emailSituation.innerHTML = 'Email Inválido'
        emailSituation.style.color = 'red'
    }

    function emailValido(){
        emailSituation.innerHTML = 'Email Válido'
        emailSituation.style.color = 'green'
    }

    const numeroSituation = document.querySelector('#numerosituation')
    numeroSituation.innerHTML = ''

    function numeroInvalido(){
        numeroSituation.innerHTML = 'Número Inválido'
        numeroSituation.style.color = 'red'
    }

    function numeroValido(){
        numeroSituation.innerHTML = 'Número Válido'
        numeroSituation.style.color = 'green'
    }

    if(validEmail.test(email)){
        emailValido()
    } else {
        emailInvalido()
    }

    if(validNumero.test(numero)){
        numeroValido()
    } else {
        numeroInvalido()
    }
})


