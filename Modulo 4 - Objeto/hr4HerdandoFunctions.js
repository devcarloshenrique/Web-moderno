//Herdando a function MeuObjeto()
function MeuObjeto() {}
console.log(MeuObjeto.prototype)

//Para herdar uma function, repare que é diferente de herdar um objeto
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Carlos Henrique'
MeuObjeto.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome} !`)
}

obj2.falar()
obj2.nome = 'Roberio Oliveira'
obj2.falar()

//Hendando a função de outra maneira
const obj4 = {
    nome: '1000tu'
}
obj4.__proto__ = MeuObjeto.prototype
obj4.falar()

const obj5 = Object.create(MeuObjeto.prototype , {
    nome: {value:'Jamilson'}
})
obj5.falar()

// Resumindo a loucura...

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)
