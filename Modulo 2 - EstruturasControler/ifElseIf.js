Number.prototype.entre = function (inicio , fim) {
    return this >= inicio && this <= fim 
}

const imprimirResultado = function (nota){
    if(nota.entre(9,10)){
        console.log('Muito bom')
    }else if(nota.entre(8,8.9)){
        console.log('Pode melhorar')
    }else if(nota.entre(7,7.9)){
        console.log('Na média')
    }
}

imprimirResultado(9)
imprimirResultado(8)
imprimirResultado(7)


