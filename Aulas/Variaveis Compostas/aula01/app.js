// Variaveis simples, só conseguem armazenar um avalor por vez.. como let, var..etc
// Variaveis compostas, armazenam mais de um dado por vez em uma mesma estrutura.

// var a << vetor = [
// elemento << Elementos (espaços) 1 << Índice/Key (De cada elemento)  = conteudo,
// elemento << Elementos (espaços) 2 << Índice/Key (De cada elemento)  = conteudo,
// elemento << Elementos (espaços) 3 << Índice/Key (De cada elemento)  = conteudo
// ]

// var automoveis = [
//     'onix', 
//     'renegade', 
//     'ka' 
// ]

// Para adicionar um elemento em um array é simples.
// nome da variavel[posição] = conteudo

// automoveis[3] = 'compass'

// Para adicionar ao final
// nome da variavel.push = conteudo

// automoveis.push('kwid')

// Para saber o tamanho digita .length
// Para deixar o array em ordem crescente .sort()
// Serve tanto para String, tanto para números.


// console.log(automoveis)
// console.log(`O Comprimento desse array é de ${automoveis.length} elementos.`)
// console.log(automoveis.sort())

// let num = [4,5,6,7,8]
// for(let pos = 0; pos < num.length; pos++){
//     console.log(num[pos])}

// For In << Funciona apenas para array e objetos

// for(let pos in num){
//     console.log(num[pos])
// }

// .indexOf() acha um valor dentro de um objeto ou array, se tiver, retorna a key e se não tiver, retorna -1

let pal = [
    'ferrari',
    'camaro',
    'porshe',
    'lamborghini'
]

if(pal.indexOf('lamborghini') == -1){
    console.log('não tem lamborghini no array')
} else {
    console.log('tem lamborghini no array')
}


