Array = [1,2,3,4,5,6,7,8,9,10]

for(item of Array){
     console.log(item)
}

for( i in Array){
    console.log(`Array[${i}] = ${Array[i]}`)
}

const obj = {
    nome: 'Carlos',
    sobreNome: 'Henrique',
    dataNascimento: '20/06/2019'
}

for (i in obj ){
    console.log(`${i} = ${obj[i]}`)
}


