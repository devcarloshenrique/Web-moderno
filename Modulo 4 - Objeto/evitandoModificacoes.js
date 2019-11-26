//Object.preventExtensions

//Permite apagar e editar, mas não permite adicionar um novo atributo
const produto = Object.preventExtensions({
    nome: 'Carlos', preco: 1.99 , tag: 'Promoção'
})

console.log(`Extensível`, Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.desc = 'Borracha escolar'
delete produto.tag 

console.log(produto)

// Object.seal

const pessoa =  {nome: 'Maria' , idade: '35' }
//Não posso apagar ou adicionar novos atributos
Object.seal(pessoa)

console.log(`Selado ` + Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.nome = 'Maria Fernandes'


console.log(pessoa)


// Object.freeze = selado + valores constantes