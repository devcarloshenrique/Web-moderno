const pai = {
    sobrenome: 'Carvalho',
    cabelo: 'pretos',
}

const filha1 = Object.create(pai)
// console.log(filha1.sobrenome)

const filha2 = Object.create(pai, {
    nome: { value: 'Carlos', writable: false, enumerable: true },
    sobrenome: { value: 'Henrique' },
    status: {
        value: function () {
            return `Meu nome é ${this.nome} ${this.sobrenome} e meus cabelos são ${this.cabelo}`
        }
    }
})

console.log(filha2.status())
console.log(Object.keys(filha2))

for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(`Não foi por herança ${key}`) : console.log(`Por herança ${key}`)
}

