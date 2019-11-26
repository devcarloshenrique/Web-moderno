console.log(`   
    -- Formas de definir uma Função --
`)
console.log(`1 -- Criar uma função de forma Literal que retorna a + b `)

function soma(a, b) {
    return a + b
}

console.log(`2 -- Criar uma função dentro de uma variavel que retorna a soma de a + b `)

const soma2 = function (a, b) {
    return a + b
}

console.log(`3 -- Armazene uma função dentro de um Array, essa função deve retornar a soma de a + b`)

const Array1 = [function soma(a, b) { return a + b }]

// console.log(Array1[0](0 , 5))

console.log(`4 -- Crie uma função imprimir, que retonar 'Ola meu nome é $ {nome}, porém você não deve passar o nome como parametro da função imprimir() , mas sim chamar de um obj, esse objto deve ter o atributo nome.`)

function imprimir() {
    return console.log(`Ola meu nome é ${this.nome}`)
}

const obj1 = {
    nome: 'Carlos',
    imprimir
}

//  obj1.imprimir()

console.log(`5 -- Crie um função que recebe como parâmetro uma função, esssa função deve imprimir 'Ola Mundo!' `)

function imprimir2(mensagem) {
    mensagem()
}

// imprimir2(() => console.log('Ola mundo'))

console.log(`6 -- Faça uma função que tem como parametro (a , b), essa função deve retornar uma função anonima que retorna a soma de a + b + c , agora chame essa função !`)

function soma3(a, b) {
    return function (c) { return a + b + c }
}

// console.log(soma3(1 , 2)(3))

// const result = soma3(1 , 1)
// console.log(result(1))

console.log(`   
    -- ForInArguments --
`)
console.log(`1 -- Faça uma função, que todo número que sejá passado como parametro será somado e retornado ao final da função, utilize forInArguments `)

function soma() {
    let soma = 0

    for (i in arguments) {
        soma += arguments[i]
    }

    return soma
}

// console.log(soma(1 , 1 , 1))


console.log(`
    -- Parametros Padrão --
`)
console.log(`1 -- Faça 4 exemplos de parâmetros padrão `)

function soma4(a, b) {
    a = isNaN(a) ? 'Não é númeral' : a
    b = b !== undefined ? b : 'Está indefinido'
    c = 1 in arguments ? c : 'Sem argumentos'
    a = a !== null ? a : 'Campo vazio'

    return { a, b, c }
}

// console.log(soma4())

console.log(`
    -- Bind --
`)
console.log(`1 -- Faça um objeto que tem como atributo Nome e uma função mostrarNome() agora crie uma nova variavel que vai chamar diretamentea função mostrarNome(), utilize o bind() `)


const obj2 = {
    nome: 'Carlos',
    mostrarNome() {
        console.log(this.nome)
    }
}

const falar = obj2.mostrarNome.bind(obj2)
// falar()

console.log(`2 -- Faça uma função Pessoa(), dentro dessa função, crie um atributo idade = 0, ainda dentro da função pessoa faça uma função anonima em que acada um segundo ela some 1 na idade, utilize bind() e setIntervalo()`)

function Pessoa() {
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

// Pessoa()

console.log(`
    -- Arrow Functions --
`)
console.log(`1 -- Faça uma Arrow function que retorna o dobro de um determinado número.`)

const dobro = a => console.log(a * 2)
// dobro(2)

console.log(`2 --  Faça uma função Pessoa(), dentro dessa função, crie um atributo idade = 0, ainda dentro da função pessoa faça uma arrow função em que acada um segundo ela some 1 na idade, setIntervalo(), não utilize bind()`)

function Pessoa2() {
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

// new Pessoa2

console.log(`3 -- Faça um exemplo  em que o objeto global == this`)

//No caso do Browser o objeto o this se refere ao objeto global window
//No caso do Node o this é igual ao objeto global global

function igualThis(param) {
    console.log(`-- Global == this`)
    console.log(this === param)
}

// igualThis(global)

console.log(`4 -- Faça um exemplo  em que o objeto global != this`)

function diferenteThis(param) {
    console.log(`-- Global != this`)
    console.log(this === param)
}

obj3 = {}
diferenteThis = diferenteThis.bind(obj3)
// diferenteThis(global)

console.log(`5 -- Faça um exemplo  em que o objeto global != module.exports`)

function thisExmodule(param) {
    console.log(`-- Global == module.exports --`)
    console.log(param == module.exports)
}

// thisExmodule(global)

console.log(`
    -- Functions Callback --
`)
console.log(`1 -- Faça um Foreach utilizando Callback `)

const array2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

function mostrar2(valor, chave) {
    console.log(`Array[${chave}] = ${valor}`)
}

// array2.forEach(mostrar2)


console.log(`2 -- Faça um Foreach utilizando Arrow Functions`)

const array3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// array3.forEach((valor, chave) => console.log(`Array[${chave}] = ${valor}`))

console.log(`3 -- Faça um Array de 1 a 10 e imprima somente os menores de 6 `)

const array4 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

const media = array4.filter(function (valor, chave) {
    return valor <= 6
})

// console.log(media)

console.log(` 
    -- Função Factory --
`)

console.log(`1 -- Faça uma função Factory !`)

function Factory(idade) {
    return {
        nome: 'Carlos',
        idade: idade
    }
}

console.log(`
    -- Função Factory Vs Class --
`)

console.log(`1 -- Faça uma class Pessoa, que tem como construtor o atributo nome, dentro da class pessoa faça uma função mostrarNome()`)

class Pessoa4 {
    constructor(nome) {
        this.nome = nome
    }

    mostrarNome() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const a1 = new Pessoa4('Carlos')
// a1.mostrarNome()

console.log(`2 -- Faça uma Arrow function que retorna uma função Factory, Essa função deve Retornar a seguinte mensagem 'Meu nome é $ {nome}'`)

const a2 = (nome) => {
    return {
        falar: () => {
            console.log(`Meu nome é ${nome}`)
        }
    }
}

//  a2('Carlos').falar()

console.log(`
    -- Função construtora --
`)

console.log(`1 -- Faça uma função construtora `)

function construtora(veloMax = 200, inter = 10) {
    //Atributo Privado Privado
    let velocidadeAtual = 0

    //Metodo Público
    this.acelerar = () => {
        if (velocidadeAtual + inter >= veloMax) velocidadeAtual = veloMax
        else velocidadeAtual += inter
    }

    this.getVelocidade = () => { console.log(`Velocidade Atual ${velocidadeAtual}`) }
}

const a3 = new construtora
// a3.acelerar()
// a3.getVelocidade()

console.log(`2 -- Faça uma função que é execultada assim que definida, e foge do escopo global window`)

// (function() {
//     console.log('Será executado na hora!')
//     console.log('Foge do escopo mais abrangente!')
//     console.log(`Está dando erro porque deve ser definida no topo`)
// })()

console.log(`
    -- Função Apply e Call --
`)
console.log(`1 -- Faça um exemplo utilizando Apply e Call, faça também sem utilizar nenhum dos dois`)

function valor(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco  * (1 - this.desc) * (1 + imposto)}`
}

const obj4 = {
    preco: 5000,
    moeda: '$',
    desc: 0.15,
    imposto: 0.15,
    valor
}

//Sem utilizar Call ou Apply
// console.log(obj4.valor())

//Não é recomendado, utilizar a variavel global.
global.preco = 4000
global.desc = 0.15
// console.log(valor())

//utilizando Call ou Apply

// console.log(valor.apply(obj4 , [0.20 , '$']))
// console.log(valor.call(obj4 , 0.20 , '$'))




