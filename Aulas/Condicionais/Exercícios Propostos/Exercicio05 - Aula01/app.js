function verificar() {

    var anoNasc = Number(document.querySelector('#anoNasc').value)
    var sexoM = document.querySelector('#sexoM')
    var sexoF = document.querySelector('#sexoF')
    var resultadoText = document.querySelector('p')
    var img = document.querySelector('img')

    if (sexoM.checked && anoNasc >= 2014) {
        resultadoText.innerHTML = `Seu ano de nascimento é ${anoNasc} e você é do gênero masculino.`
        img.classList.add('img')
        img.src = 'images/cM.png'
    } else if (sexoF.checked && anoNasc >= 2014) {
        resultadoText.innerHTML = `Seu ano de nascimento é ${anoNasc} e você é do gênero feminino.`
        img.classList.add('img')
        img.src = 'images/cF.png'
    } else if (sexoM.checked && anoNasc >= 2011) {
        resultadoText.innerHTML = `Seu ano de nascimento é ${anoNasc} e você é do gênero masculino.`
        img.classList.add('img')
        img.src = 'images/aM.png'
    } else if (sexoF.checked && anoNasc >= 2011) {
        resultadoText.innerHTML = `Seu ano de nascimento é ${anoNasc} e você é do gênero feminino.`
        img.classList.add('img')
        img.src = 'images/aF.png'
    } else if (sexoM.checked && anoNasc >= 2000) {
        resultadoText.innerHTML = `Seu ano de nascimento é ${anoNasc} e você é do gênero masculino.`
        img.classList.add('img')
        img.src = 'images/adM.png'
    } else if (sexoF.checked && anoNasc >= 2000) {
        resultadoText.innerHTML = `Seu ano de nascimento é ${anoNasc} e você é do gênero feminino.`
        img.classList.add('img')
        img.src = 'images/adF.png'
    } else if (sexoM.checked && anoNasc < 1970 && anoNasc > 1950) {
        resultadoText.innerHTML = `Seu ano de nascimento é ${anoNasc} e você é do gênero masculino.`
        img.classList.add('img')
        img.src = 'images/iM.png'
    } else if (sexoF.checked && anoNasc < 1970 && anoNasc > 1950) {
        resultadoText.innerHTML = `Seu ano de nascimento é ${anoNasc} e você é do gênero feminino.`
        img.classList.add('img')
        img.src = 'images/iF.png'
    } else {
        resultadoText.innerHTML = 'Você é velho de mais, chama seu filho ai'
    }
}