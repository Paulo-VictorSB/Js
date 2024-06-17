// Variaveis simples, só conseguem armazenar um avalor por vez.. como let, var..etc
// Variaveis compostas, armazenam mais de um dado por vez em uma mesma estrutura.

// var a << vetor = [
// elemento << Elementos (espaços) 1 << Índice/Key (De cada elemento)  = conteudo,
// elemento << Elementos (espaços) 2 << Índice/Key (De cada elemento)  = conteudo,
// elemento << Elementos (espaços) 3 << Índice/Key (De cada elemento)  = conteudo
// ]

var automoveis = [
    'onix', 
    'renegade', 
    'ka' 
]

// Para adicionar um elemento em um array é simples.
// nome da variavel[posição] = conteudo

automoveis[3] = 'compass'

// Para adicionar ao final
// nome da variavel.push = conteudo

automoveis.push('kwid')

// Para saber o tamanho digita .length
// Para deixar o array em ordem crescente .sort()
// Serve tanto para String, tanto para números.


console.log(automoveis)
console.log(`O Comprimento desse array é de ${automoveis.length} elementos.`)
console.log(automoveis.sort())

let num = [4,5,6,7,8]

let pos = 0
while(pos <= 5){
    console.log(num[0])
    num++
}


