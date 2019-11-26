const valores = [7.7,5.9,7.7,5.5,10.0] //Forma literal
console.log(valores[0], valores[1])
console.log(valores)

valores[4] = 10
console.log(valores.length)

valores.push({id:3} , false , null , ' ') // Acrescenta valores em um array
console.log(valores)

console.log(valores.pop()) // Retira o ultimo valor do Array
console.log(valores)

delete valores[0]
console.log(valores)

console.log(typeof valores)