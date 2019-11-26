let array =  [12, 5, 9, 22, 1, 13, 2, 17, 8, 6, 15, 7, 8 ,1 ]
let ordenado = []

for (let cont = 0; cont <= 22; cont++) {

    for(let cont2 = 0 ; cont2 <= array.length ; cont2 ++){

        if(array[cont2] == cont ){
            ordenado.push(array[cont2])
        }
    }
}

console.log(ordenado)


