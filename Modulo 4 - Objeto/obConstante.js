const obj1 = {
    nome: 'Carlos',
    sobreNome: 'Henrique'
}

Object.freeze(obj1)

obj1.nome = 'Doglas'
console.log(obj1)