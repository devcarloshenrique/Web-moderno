console.log(`
    -- CRIAÇÃO DE OBJETOS--
`)

console.log(`--- OBS: TODOS OS OBJETOS DEVEM TER OS ATRIBUTOS NOME , SOBRENOME E MOSTRARNOME()
`)
console.log(`1 -- Faça um objeto utilizando notação literal !`)

const obj1 = {
    nome: 'Carlos',
    sobrenome: 'Henrique',
    mostrarNome() {
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}`)
    }
}

console.log(`2 -- Faça um objeto utilizando (new Object) !`)

const obj2 = new Object({
    nome: 'Carlos',
    sobrenome: 'Henrique',
    mostrarNome() {
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}`)
    }
})

console.log(`3 -- Faça um objeto utilizando funções construtoras !`)

function Pessoa() {
    this.nome = 'Carlos'
    this.sobrenome = 'Henrique'

    this.mostrarNome = function () {
        return console.log(`Meu nome é ${this.nome} ${this.sobrenome}`)
    }
}

const obj3 = new Pessoa()
// obj3.mostrarNome()

console.log(`4 -- Faça um objeto por meio de uma função factory !`)

function Pessoa2() {
    return {
        nome: 'Carlos',
        sobrenome: 'Henrique',
        mostrarNome() {
            return console.log(`Meu nome é ${this.nome} ${this.sobrenome}`)
        }
    }
}

const obj4 = new Pessoa2()
// obj4.mostrarNome()

console.log(`5 -- Faça um objeto utilizando Object.create() !`)

const obj5 = Object.create({}, {
    nome: { value: 'Carlos', enumerable: true, writable: true },
    sobrenome: { value: 'Henrique', enumerable: true, writable: true },
    mostrarNome: {
        value: function () {
            return console.log(`Meu nome é ${this.nome} ${this.sobrenome} `)
        }
    }


});

// obj5.mostrarNome()

console.log(` 
    -- FRIZANDO OBJETOS --
 `)

console.log(`1 -- Faça um objeto e freze esse devido objeto`)

const obj6 = {
    nome: 'Carlos'
}

Object.freeze(obj6)

console.log(`
    -- GETTERS E SETTERS --
`)

console.log(`1 -- Faça um objeto e faça os metodos acessores e os modificadores !`)

const obj7 = {
    _nome: '',
    set Nome(nome) {
        this._nome = nome
    },
    get Nome() {
        return this._nome
    }
}

obj7.nome = 'Carlos'
// console.log(obj7.nome)

console.log(`
    -- FUNÇÕES IMPORTANTES OBJETOS --
`)
console.log(` OBS: FAÇA UM OBJETO PESSOA COM OS ATRIBUTOS NOME , PESO , IDADE , ENDERECO`)
console.log(` OBS: UTILIZE FOREACH EM CADA FUNÇÃO
`)

const Pessoa3 = {
    nome: 'Carlos',
    peso: '72kg',
    idade: '19',
    endereco: 'Rua sete casa 279',
    mostrar() {
        console.log(`Meu nome  é ${this.nome}, eu peso ${this.peso}, tenho ${this.idade} anos e moro no endereço ${this.endereco}`)
    }
}

const Pessoa33 = {
    Programador: 'Junior'
}

console.log(`1 -- Utilize no objeto pessoa a função (object.keys)`)

// console.log(Object.keys(Pessoa3))

// Object.keys(Pessoa3).forEach((a , b , c) => {console.log(a)})

console.log(`2 -- Utilize no objeto pessoa a função (object.values)`)

// console.log(Object.values(Pessoa3))

// Object.values(Pessoa3).forEach(a => { console.log(a) })

console.log(`3 -- Utilize no objeto pessoa a função (object.entries)`)

Object.entries(Pessoa3).forEach(a => {
    // console.log(a)
    // console.log(a[0])
    // console.log(a[1])
})

console.log(`4 -- Utilize no objeto pessoa a função (object.defineProperty)`)

Object.defineProperty(Pessoa3, 'dataNasc', {
    enumerable: true,
    writable: true,
    value: '20/06/2000'
})

console.log(`4 -- Utilize no objeto pessoa a função (object.assing)`)

// console.log(Object.assign(Pessoa3 , Pessoa33))

console.log(`
    -- OBJECT.PROTOTYPEOF() --
`)
console.log(`OBS: Faça um objeto pessoa que tem como atributo nome, idade e status()
`)

console.log(`1 -- Faça uma objeto pessoa1, que herda os atributos do objeto pessoa, utilize __proto__`)

const Pessoa4 = {
    nome: 'Carlos',
    idade: 19,
    status() {
        return console.log(`Meu nome é ${this.nome} eu tenho ${this.idade} anos`)
    }
}

const Pessoa5 = {
    __proto__: Pessoa4,
    sobrenome: 'Henrique',
    status() {
        return console.log(`Meu nome é ${this.nome} ${this.sobrenome} eu tenho ${this.idade} anos`)
    }
}

console.log(`2 -- Faça uma objeto pessoa2, que herda os atributos do objeto pessoa, utilize Object.setPrototypeOf()`)

const Pessoa6 = {
    meuNome() {
        return console.log(`Meu nome ${this.nome} ${this.sobrenome}`)
    }
}

const obj8 = Object.setPrototypeOf(Pessoa6, Pessoa5)

// obj8.status()

console.log(`
    -- OBJECT.CREATE() --
`)

console.log(`OBS: Faça um objeto pai que terá os atributos nome e sobrenome
`)

const obj9 = {
    sobrenome: 'Henrique'
}

console.log(`1 -- Faça um objeto filho que terá como prototipo pai, o objeto filho deve ter os atributos sobrenome e status(), chame a função status do objeto filho`)

const obj10 = Object.create(obj9, {
    nome: { value: 'Carlos', writable: true, enumerable: true },
    status: {
        value: function () {
            return `Meu nome é ${this.nome} ${this.sobrenome}`
        }
    }
})

// console.log(obj10.status())

console.log(`2 -- Utilizando for in e hasOwnProperty(), faça uma verificação dos atributos que foram herdados ou não
`)

for (key in obj10) {
    // obj10.hasOwnProperty(key) ? console.log(key + ` não foi herdado`) : console.log(`${key} foi herdado`)
}

console.log(`
    -- HERDANDO FUNÇÕES --
`)

console.log(`1 -- Deseafio 1 Herança`)

function meuObjeto() {
    this.nome = ''
    this.falarNome = function () {
        return `Meu nome é ${this.nome}`
    }
}

const obj12 = new meuObjeto
const obj13 = {
    __proto__: meuObjeto()
}
const obj14 = Object.create(new meuObjeto(), {

})

obj12['nome'] = 'Carlos'
obj13.nome = 'Roberio'
obj14['nome'] = 'Jutson'

// console.log(obj12.nome)
// console.log(obj13.nome)
// console.log(obj14.nome)

console.log(`
    -- PROTOTYPE STRING E PROTOTYPE ARRAY --
`)

String.prototype.UpperCase = function () {
    return this.toUpperCase()
}

// console.log('Carlos'.UpperCase())

Array.prototype.reverse = function () {
    return this[0]
}

// console.log(['1','2','3','4','5'].reverse())

console.log(`
    -- CRIANDO OBJETOS FREEZADOS --
`)

console.log(`1 -- Faça um exemplo de um objeto que não pode ser Extendido. `)

const obj15 = Object.preventExtensions({
    nome: 'Carlos'
})

obj15.sobrenome = 'Henrique'

// console.log(`${obj15.sobrenome}`)

console.log(`2 -- Faça um exemplo utilizando Object.seal. `)

const obj16 = Object.seal({
    nome: 'Carlos Henrique'
})

delete obj16

// console.log(obj16)

console.log(`
    -- JSON --
`)

console.log(`1 -- Transforme um JSON em objeto e vice-versa. `)

const obj17 = {
    nome: 'Carlos',
    sobrenome: 'Henrique',
    idade: 19,
    status(){
        return `${this.nome} ${this.sobrenome}`
    }
}

console.log(JSON.stringify(obj17))

const json = JSON.parse('{"nome":"Carlos"}')