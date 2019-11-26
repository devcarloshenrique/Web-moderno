let a = 3
this.c = 2

console.log(this.a)
console.log(global.a)

console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)

//Criando uma variavel: sem var e sem let
abc = 3  //Não fazer isso
console.log(global.abc)
