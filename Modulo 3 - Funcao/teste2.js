let array =  [12, 5, 9, 22, 1, 13, 2, 17, 8, 6, 15, 7, 8 ,1 ]

function maiorIndice(){
    let aux = 0
    array.forEach(function (valor ){
        if(aux < valor ){
            aux = valor
        }        
    })
    return aux
}

function menorIndice(){
    let aux = maiorIndice()
    array.forEach(function (valor ){
        if(aux > valor ){
            aux = valor
        }        
    })
    return aux
}

