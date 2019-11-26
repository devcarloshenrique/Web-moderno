function soma1(a, b) {
    b = b || 1
    return a + b
}

// estrategia 2, 3, e 4 para gerar valor padrão 

function soma2(a , b , c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

//valor padrão do es2015 

function soma3(a = 1, b = 2, c = 3){
    return a + b + c
}

