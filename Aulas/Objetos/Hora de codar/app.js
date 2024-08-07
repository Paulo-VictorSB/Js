const data = [
    {nome : "Matheus", age: 31, sallary: 2000, driverLicense: true},
    {nome : "João", age: 18, sallary: 1500, driverLicense: false},
    {nome : "Mariana", age: 22, sallary: 4000, driverLicense: true},
    {nome : "Pedro", age: 50, sallary: 7200, driverLicense: true},
    {nome : "Érica", age: 16, sallary: 0, driverLicense: false},
]

// 1 - Reverse

const reverseData = data.reverse()

console.log(reverseData )

// 2 - find {Trás apenas o primeiro resultado que passa no teste fornecido}
const highSallary = 5000

const highestSallary = data.find((user) => user.sallary > highSallary)

console.log(highestSallary)

// 3 - findIndex
const lowSallary = 2000

const lowestSallary = data.findIndex((user) => user.sallary > 0 && user.sallary < 2000)

data[lowestSallary].sallary += 500

console.log(data)

// 4 - Includes

const number = [1, 2, 3, 4, 5]

const hasFour = number.includes(4)

console.log(hasFour)

// 5 - map

data.map((user) => user.newsletter = false)

console.log(data)

// 6 - filter

const drivers = data.filter((user) => user.driverLicense)

console.log(drivers)

// 7 - reduce

const sallarySum = data.reduce((totalSallary, user) => totalSallary += user.sallary, 0)

console.log(sallarySum)

// 8 - forEach

const showUserNames = (users) => {
    users.forEach((user) => {
        console.log(`Olá ${user.nome}`)
    })
}

showUserNames(data)

// 9 - some

data[0].newsletter = true
let someoneWithNewslester = data.some((user) => user.newsletter)

console.log(someoneWithNewslester)

// 9 - every

const everyUserHasName = data.every((user) => user.nome)
console.log(everyUserHasName)