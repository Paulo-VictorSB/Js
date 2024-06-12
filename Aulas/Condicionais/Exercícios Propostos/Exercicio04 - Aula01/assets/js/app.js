let horario = new Date()
let horas = horario.getHours()

let saudacao = document.querySelector('#saudacao')
let infoHorario = document.querySelector('#infoHorario')
let imagem = document.querySelector('#imagem')

if (horas > 5 && horas < 12) {
    saudacao.innerHTML = 'Bom Dia!';
    infoHorario.innerHTML = `São ${horas} Horas`;
    imagem.src = 'assets/images/manha.jpg';
    document.body.style.background = '#FEB834'
} else if (horas < 18) {
    saudacao.innerHTML = 'Boa Tarde!';
    infoHorario.innerHTML = `São ${horas} Horas`;
    imagem.src = 'assets/images/tarde.jpg';
    document.body.style.background = '#4289AE'
} else if (horas < 24) {
    saudacao.innerHTML = 'Boa Noite!';
    infoHorario.innerHTML = `São ${horas} Horas`;
    imagem.src = 'assets/images/noite.jpg';
    document.body.style.background = '#010100'
} else {
    saudacao.innerHTML = '[ERRO]Horário Inválido';
    infoHorario.innerHTML = '[ERRO]Horário Inválido';
    imagem.src = '';
}