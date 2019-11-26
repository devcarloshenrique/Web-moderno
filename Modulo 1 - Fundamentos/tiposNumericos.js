const peso1 = 1.9
const peso2 = Number('2.3')

console.log(peso1,peso2)
console.log(Number.isInteger(peso2))

const x = peso1 * peso2 * peso1 * peso2

console.log(x)
console.log(x.toFixed(2)) // Limitando a quantidade de casas decimais
console.log(typeof x)
console.log(x.toString(2)) //Binario
console.log(typeof x)
console.log(typeof Number)

// Utilizando o Math

const raio = 5.6
const area = Math.PI * Math.pow(raio,2)

console.log(area.toFixed(2))
console.log(typeof Math)

