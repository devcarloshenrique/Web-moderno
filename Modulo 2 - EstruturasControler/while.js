function numberAleatorio (min,max){
    const valor =  Math.random() * (max - min) + min
    return Math.floor(valor)
}


console.log(numberAleatorio(1,100))

let opcao = 0

while (opcao != 86552908) {
    opcao = numberAleatorio(800000000,99999999)
    console.log(`Opção = ${opcao}`)
}