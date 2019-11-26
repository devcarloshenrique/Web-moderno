function soma(x , y){
    return x + y
}

const imprimir = function (a , b , operacao = soma){
    console.log(`Soma de A + B => ${operacao(a , b)}`)
}

imprimir(1 , 2)
imprimir(3 , 4 , (x , y) => x * y)