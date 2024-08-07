// Desafio 6: Contagem de Ocorrências
// O objetivo é converter a string JSON em um array de objetos JavaScript, contar quantas pessoas existem em cada profissão e exibir o resultado no console.

const pessoasJSON = '[{"nome": "Ana", "profissao": "Engenheira"}, {"nome": "Bruno", "profissao": "Médico"}, {"nome": "Clara", "profissao": "Engenheira"}, {"nome": "Daniel", "profissao": "Professor"}]';

const contagemProfissao = {}
const pessoas = JSON.parse(pessoasJSON)
pessoas.forEach(user => {
    const profissao = user.profissao
    if(contagemProfissao[profissao]){
        contagemProfissao[profissao]++
    } else {
        contagemProfissao[profissao] = 1
    }
});

console.log(contagemProfissao)