const frabricantes = ['Mercedes' , 'Audi' , 'BMW']

function imprimir(nome , indice ){
    console.log(`${indice + 1} . ${nome}`)
}

frabricantes.forEach(imprimir)

frabricantes.forEach(function (nome , indice ){
    console.log(`${indice + 1} . ${nome}`)
})

frabricantes.forEach(frabricantes => console.log(frabricantes))
