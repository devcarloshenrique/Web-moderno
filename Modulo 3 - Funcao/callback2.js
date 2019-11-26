const notas = [6.0,7.5,6.6,9.9,8.8]
const notasB = []

//Sem callback
    for(i in notas){
        if(notas[i] <= 6) notasB.push(notas[i]) 
    }



//Com callback
notasBaixas = notas.filter(function(notas){
    return notas <= 6
})

console.log(notasBaixas)


notasBaixas2 = notas.filter(notas => notas <= 6)
console.log(notasBaixas2)