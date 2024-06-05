console.log('funcionando corretamente')

function login(){

    let login = document.querySelector('#login').value
    let password = Number(document.querySelector('#password').value)

    if (login == 'admin' && password == 123) {
        alert('Seja bem vindo Admin!')
    } else {
        alert('Login ou senha inválidos.')
    }

}