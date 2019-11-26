// Não é necessário colocar nota dentro de parenteses pois só tem um parametro
// Operador ternário ( >= )
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(typeof resultado)


const resultado2 = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}

console.log(resultado2(7.1))
console.log(typeof resultado)