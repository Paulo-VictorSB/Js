let conjunto = []

const textarea = document.querySelector('#textareaInput')
const div = document.querySelector('#div')
let main = document.querySelector('main');

let button = document.querySelector('#adicionar')
button.addEventListener('click', ()=> {
    const numInput = document.querySelector('#numInput')
    const numValue = Number(numInput.value)
    if(numInput.value == 0 || numInput.value < 1 || numInput.value > 100 || conjunto.includes(numValue)){
        alert('Você precisa adicionar um valor válido, entre 1 a 100 ou o número já existe no seu conjunto.')
    } else {
        conjunto.push(numValue);
        const numText = document.createElement('div');
        numText.classList.add('numText');
        numText.innerHTML = `O Número Selecionado foi: ${numInput.value}`;

        textarea.append(numText);
        let reset = document.querySelectorAll('.hide')
        reset.forEach(element => {
            element.innerHTML = ''
        });
    }

    numInput.value = ''
})

const finalizar = document.querySelector('#button')
finalizar.addEventListener('click', ()=>{

    if(textarea.querySelector('.numText')){
        let quantidade = document.createElement('div');
        quantidade.classList.add('hide')
        quantidade.innerHTML = `Foram cadastrados ${conjunto.length} valores`;
        main.append(quantidade);

        let maior = document.createElement('div')
        maior.classList.add('hide')
        maior.innerHTML = `O Maior número entre eles é ${Math.max(...conjunto)}`
        main.append(maior)

        let menor = document.createElement('div')
        menor.classList.add('hide')
        menor.innerHTML = `O Menor número entre eles é ${Math.min(...conjunto)}`
        main.append(menor)

        let soma = document.createElement('div')
        soma.classList.add('hide')
        soma.innerHTML = `A Soma entre eles é ${conjunto.reduce((n1, n2) => n1 + n2, 0)}`
        main.append(soma)
        let same = conjunto.reduce((n1, n2) => n1 + n2, 0)

        let media = document.createElement('div')
        media.classList.add('hide')
        media.innerHTML = `A Média entre eles é ${same / conjunto.length}`
        main.append(media)

    } else {
        alert('Você precisa adicionar resultados para finalizar a operação.')
    }
})





