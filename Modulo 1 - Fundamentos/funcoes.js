// Funcoes Sem retorno

function imprimirSoma(a,b){
    console.log(a + b)
}

imprimirSoma(2,2)


// Funcoes Com retorno

function soma(a , b = 0){
    return a + b
}

console.log(soma(1,5))

// Armazenando uma fucao em uma variavel 

const imprimirSoma2 = function(a , b){
    console.log(a + b)
}

imprimirSoma2(5,6)

// Armazenando uma funcao Arrow em uma variavel 

const imprimirSoma3 = (a , b) => {
    return a + b
}

console.log(imprimirSoma3(1,1))

// Retorno implícito


const imprimirSoma4 = (a , b) => a + b

console.log(imprimirSoma4(5,5))

const imprimir = a => console.log(a)
imprimir('Legal')

