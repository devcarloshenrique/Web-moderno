const obj1 = {
    nome: 'Carlos',
    sobrenome: 'Henrique',
    soma() {
        return a + b + c
    }

}

console.log(obj1)
console.log(JSON.stringify(obj1))

// console.log(JSON.parse("{'a' : 1, 'b': 2}")) gera erro
console.log(JSON.parse('{"a" : 1, "b": 2}'))
//Por padrão é necessário colocar em aspas tudo aquilo que for String
console.log(JSON.parse('{ "a": 1 , "b": "String" , "c":true , "d":{"nome" : "carlos"} }'))