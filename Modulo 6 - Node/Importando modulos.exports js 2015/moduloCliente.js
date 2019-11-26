//Para utilizar o sistema de modulo do node, será utilizado o require

const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)

console.log(moduloB)
moduloB.boaNoite()
console.log(moduloB.bomDia)

