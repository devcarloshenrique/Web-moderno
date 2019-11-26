const obj1 = {} //objeto, anotação literal

obj1.nome = 'Bola'
obj1['Sobrenome'] = 'Henrique'
console.log(obj1)


function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('exec')
    }
}

const obj2 = new Obj('Cadeira')
console.log(obj2.nome)
obj2.exec()

console.log(typeof obj2)
console.log(obj2)

