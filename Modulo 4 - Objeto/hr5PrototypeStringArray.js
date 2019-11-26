//Os três tem em comum a função prototype
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//split separa todas as letras em um array, 
//reverse faz o array inverter sua ordem 
//join transforma o array em uma String novamente

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([0,1,5,2,3,456,1].first())

//Não faça isso meu bom, é só um exemplo, essa função toString já existe 
String.prototype.toString = function () {
    return 'Palavra 2 '
}

console.log('Escola C0d3r'.reverse())