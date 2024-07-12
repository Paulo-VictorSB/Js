// Desafio 2: Manipulação de Dados JSON
// Dado o seguinte JSON como string, converta-o para um objeto JavaScript. Em seguida, adicione uma nova disciplina ao array de disciplinas e converta o objeto de volta para uma string JSON. Por fim, exiba a string JSON resultante no console.

const JsonOriginal = '{"nome": "Carlos", "idade": 24, "curso": "Medicina", "disciplinas": ["Anatomia", "Bioquímica"]}'

const JsonObjeto = JSON.parse(JsonOriginal)

JsonObjeto.disciplinas.push("Fisioterapia")

const JsonAlterado = JSON.stringify(JsonObjeto)

console.log(JsonAlterado)
