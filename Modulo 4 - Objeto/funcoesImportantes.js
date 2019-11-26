const pessoa = {
    nome: 'Carlos',
    peso: 13,
    endereco: {
        rua: 'Rua sete',
        endereco: 257
    },
    dataNasc: '20/06/2000'

}

// console.log(Object.keys(pessoa))
// console.log(Object.values(pessoa))
// console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => console.log(`${e[0]} => ${e[1]}`))
console.log(``)
Object.values(pessoa).forEach((values, chaves) => console.log(`Array[${chaves}] = ${values}`))
console.log(``)
Object.keys(pessoa).forEach((values, chaves) => console.log(`Array[${chaves}] = ${values}`))

Object.defineProperty(pessoa, 'idade', {
    enumerable: true,
    writable: false,
    value: '19'
})

pessoa.idade = '18'
console.log(pessoa.idade)

//Object.assign (ECMAscript 2015)
const dest = { a: 1 }
const ob1 = { b: 2}
const ob2 = {c: 3 , d:4 }
const obj3 = Object.assign(dest,ob1,ob2)
console.log(obj3)