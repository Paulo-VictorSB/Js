function maiorMenor(n){
    if(n > 10){
        return 'maior que 10'
    } else {
        return 'menor que 10'
    }
}

let resultado = maiorMenor(5)
console.log(resultado)

function soma(n1, n2){
    return n1 + n2
}

console.log(`A soma dos valores é ${soma(45,45)}`)

function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat*=c
    }
    return fat
}

console.log(fatorial(5))

function fat(n){
    if( n == 1){
        return 1
    } else {
        return n * fat(n-1)
    }
} 

console.log(fat(5))