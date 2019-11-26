console.log('-- Arrays --')
console.log('-- Criar um Array de Forma Literal')

const Array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const Array2 = [1, , 2, , '3']

console.log('-- Adicionar um dado em um Array com Push')

const Array3 = [1, 2, 3]
Array3.push(4, '5')

console.log('-- Adicionar um dado em um Array em uma Chave especifica.')

const Array4 = [1, 2, 3]
Array4[3] = 4

console.log('-- Apagar um dado de um Array em uma determinada Chave')

Array5 = [1, 2, 3, 4, 5]
delete Array5[4] // O valor é apagado, mas o espaço continua lá '<1 empty item>'

console.log('-- Apagar um dado de um Array com pop')

Array6 = [1, 2, 3, 4, 5]
Array6.pop()

console.log('-- Imprimir os dados de um Array utilizando .forEach()')

const Array7 = ['a', 'b', 'c', 'd', 'e']

Array7.forEach(function (Valor, Chave, Array) {
    // console.log(`Valor ${Valor} Chave ${Chave} Array => ${Array}`)
})

console.log('-- Faça um Array apartir de uma String utilizando o .split()')

const String1 = 'Carlos,Ana,Milton,Hudson,Rogerio'
const Array8 = String1.split(',')

console.log('-- Utilizando um for , faça um array de 1 a 10')

const Array9 = []
for (var x = 0; x <= 10; x++) {
    Array9.push(x)
}

console.log('-- Funções --')

console.log("-- Criar uma Função que imprima 'ola mundo' dentro de uma variavel")

const String2 = function Imprimir1() { console.log('Ola mundo') }
// String2() Chamando a Variavel

const String3 = (nome) => console.log(`Meu nome é ${nome}`)
// String3('Carlos') Chamando a Variavel

console.log('-- Criar uma Funcao que retorna multiplos dados (utilizando um objeto)')

function Imprimir2() {
    const soma = 1 + 1
    const subtracao = 1 - 1
    return { soma, subtracao }
}

console.log('-- Criar uma Funcao do tipo Arow')

const Imprimir3 = (nome, sobrenome) => console.log(`Meu nome é ${nome}, e meu sobrenome é ${sobrenome}`)
// Imprimir3('Carlos' , 'Henrique') 

console.log('-- Objeto --')

console.log('-- Criar um Objeto de Forma Literal e imprimir seus Atributos')

const obj1 = {}
obj1.nome = 'Carlos'
obj1['Sobrenome'] = 'Henrique'

// console.log(`Meu nome é ${obj1.nome + ' ' + obj1.Sobrenome}`) Mostrando o obj1

console.log(`-- Criar um Objeto que pussuí um atributo chamado de Funcao, esse atributo deve receber
uma função que imprime 'Ola mundo'`)

const obj2 = {
    funcao: function () {
        console.log('Ola mundo')
    }
}

// obj2.funcao() Chamando o atributo funcao()

console.log(`-- Criar uma função mostrar que tem um atributo nome = 'Carlos' e um atributo funcao que
recebe uma function que imprime 'Ola mundo', imprima os dois atributos`)

function mostrar() {
    this.nome = 'Carlos'
    this.funcao = function () {
        console.log('Ola Mundo')
    }
}

/* -- Chamando os Atributos da function mostrar()
*  const a = new mostrar()
*  a.funcao()
*  console.log(a.nome)
*/

console.log(`-- Criar um objeto que recebe nome , sobrenome , endereço. dentro de endereço criar dois 
atributos (Rua e NumeroCasa)`)

const obj4 = {
    nome: 'Carlos',
    sobreNome: 'Henrique',
    endereco: {
        rua: 'Rua sete',
        numeroCasa: '257'
    }
}

console.log('-- Destruncturing --')

console.log(`-- Criar um objeto que recebe nome , sobrenome , endereço. dentro de endereço criar dois 
atributos (Rua e NumeroCasa) , agora desestruture todos os atributos`)

const obj5 = {
    nome: 'Carlos',
    sobreNome: 'Henrique',
    endereco: {
        rua: 'Rua sete',
        numeroCasa: '257'
    }
}

const { nome: n, sobreNome: sn, endereco: { rua: r, numeroCasa: nc } } = obj5

console.log(`Crie um array dentro de um Array e desestruture os dois`)

const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, [11, 12, 13]]

const [valor1, , , , , , , , , , valor2] = array10

console.log(`-- Faça uma função Random entre dois parametros, min e max. Utilizando Math.random e Math.floor,
agora chame a função passando como unico parametro um objeto que possui como atributo min e max`)

function random({ min, max }) {
    const random = Math.random() * (max - min) + min
    return Math.floor(random)
}

/*
*  const obj = {min : 0 , max: 100} Destructuring utilizado nos parametros de uma function
*  console.log(random(obj))
*/

console.log(`-- Faça uma função mostrar que recebe dois parametros do tipo booleanos, essa função deve,
dentro dessa função faça 3 variaveis constantes que comparam os dois parametros utilizando os operadores
logicos || && !=`)

function mostrar2(trabalho1 , trabalho2){
    const op1 = trabalho1 && trabalho2
    const op2 = trabalho1 || trabalho2
    const op3 = trabalho1 != trabalho2

    return {op1 , op2 , op3}
}

console.log(`-- Faça uma função do tipo Arrow que imprime um template String, com a soma de 1 + 1`)

const funcaoArrow = (a , b ) => console.log(`A soma de ${a} + ${b} é igual á ${a + b} `)

// funcaoArrow(2,2) Chamando a Function Arrow




