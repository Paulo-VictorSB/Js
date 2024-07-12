const regEx = /\s/
const a = "ddd abc"

console.log(regEx.test(a))
console.log(regEx.exec(a))
console.log(a.match(regEx))

const newA = a.replace(regEx, "def")
console.log(newA)

console.log(a.search(regEx))
console.log(a.split(regEx))