const a = { nome: 'Carlos'}
const b = a

console.log(b)
//Atribuição por Referencia
b.nome = 'Opa' //B aponta para o mesmo endereco de A, logo se eu alterar b, a será alterada
console.log(b)
console.log(a)

let c = 3
let d = c

d++

console.log(c)
console.log(d)

let valor //Variavel não inicializada
console.log(valor)

valor = null //Não aponta para nenhum local de mémoria
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //metodo errado
console.log(produto.preco)
console.log(produto)

delete produto.preco //metodo certo
console.log(produto)
console.log(produto.preco)

produto.preco = null //sem valor






