// Desafio 3: Trabalhando com Arrays de Objetos JSON
// Você recebeu uma lista de estudantes em formato JSON. Converta essa string JSON em um array de objetos JavaScript. Em seguida, itere sobre o array e exiba o nome e a idade de cada estudante no console.

const estudantesJSON = '[{"nome": "Ana", "idade": 21}, {"nome": "Bruno", "idade": 23}, {"nome": "Clara", "idade": 20}]'

const estudantes = JSON.parse(estudantesJSON)

for(let i = 0; i < estudantes.length; i++){
    let mostrarN = estudantes[i].nome
    let mostrarI = estudantes[i].idade
    console.log(`Meu nome é ${mostrarN} e eu tenho ${mostrarI} anos`)
}