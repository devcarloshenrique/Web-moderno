//Arrays 

const valores = [7.7, 5.9, 7.7, 5.5, 10.0] //Forma literal
//Adicionando um valor diretamente em uma determinada Chave 
valores[5] = 50
//Adicionando um valor no final do array
valores.push(11)
//Remove o ultimo valor de uma array
valores.pop()

//ForEach de Array
console.log('--- ForEach de Array')
valores.forEach(function (item, index, array) {
    console.log('item: ' + item + ' index: ' + index + ' array ' + array)
})

//Funcoes

//Funcao dentro de Variavel
console.log('\n Funcao dentro de Variavel \n')
const Variavel = function (a, b) { return a + b }
console.log(Variavel(1, 3))

//Funcao Arrow
const Arrow = (a) => console.log('\n Funcao Arrow \n')
Arrow()

//Objeto é uma Funcao

console.log('todo objeto é ' + typeof Object)

//Parei em notação ponto

//Criando um obj
console.log('\n --- Objeto 1 --- \n')
const obj1 = {} //Criando um objeto de Forma literal 

obj1.nome = 'Carlos' // criando o atributo nome, sem precisar está dentro do escopo de obj1
console.log(obj1)

console.log('\n --- Objeto 2 --- \n')

const obj2 = function () { //Função dentro de uma variavel constante
    this.nome = nome

}

obj2.nome = 'Carlos'
console.log(obj2)
console.log(obj2.nome)

function obj6(nome) { // Criando uma funcao 
    this.nome = nome
    this.funcao = function () {
        console.log('ola Mundo')
    }
}
obj6.nome = 'Carlos'
console.log(obj6)

const objFuncao = new obj6() // Criando um objeto da função criada anteriormente
console.log(objFuncao)
objFuncao.funcao()

console.log('\n --- Objeto 3 --- \n')

const obj7 = {
    nome: 'Carlos',
    sobrenome: 'Henrique',
    endereco: {
        rua: '257',
        numeroCasa: '200'
    }
}

console.log('\n --- Criando uma variavel destructuring --- \n')

const {nome: n , sobrenome , endereco: {rua , numeroCasa}} = obj7

console.log('Nome: ' + n + '\n' + 'Sobrenome: ' + sobrenome  + '\n' + 'Endereço:' + rua + ' Numero Casa ' + numeroCasa)


console.log('\n --- Criando uma Array destructuring --- \n')

const array = [1,2,3,4,5,6,7,8,9,10, [11,12,13]]

const [,,,,,,,,,,[,,n1]] = array
console.log(n1)

// Juntando dois Objetos

let obj11 = {item1:"a" , item2:"b"}
let obj22 = {item3:"c" , item4:"d"}

 let obj10 = {...obj11 ,...obj22}
 console.log(obj10)

 //Função com operadores logicos

 function operadores(tabalho1 , trabalho2){
     const comprarTv = tabalho1 && trabalho2
     const irCinema = !comprarTv
    
     return {comprarTv , irCinema}
 }
 console.log(operadores(true,false))

 








