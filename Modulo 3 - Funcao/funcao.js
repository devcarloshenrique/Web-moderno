//Criar uma função de forma literal 
function funcao1() { }

//Armazenando uma função em uma variavel
const funcao2 = function () { }

//Armazenando uma função em um Array
const array = [function(a , b){ return a + b} , funcao1() , funcao2]

// console.log(array[0](1,2))

//Armazenar uma função em um atributo de um objeto

const obj1 = {}
obj1.funcao = function(){console.log('Ola')}

//Passar função como parametro

function run(fun) {
    fun()
}

run(function () { console.log('Ola')})

//Uma função pode retornar/conter uma função 

function soma(a , b ){
    return function (c){
        console.log(a + b + c)
    }
}

soma(1,2)(3)
const somaTotal = soma(1,2)
somaTotal(4)