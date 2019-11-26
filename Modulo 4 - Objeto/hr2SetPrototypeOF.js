// //Cadeia de Prototípos (prototype chain)

// Object.prototype.attr0 = 'Z' //OBS: nunca fazer isso

// const avo = {attr1: 'A'} //O Avo tem como prototipo o Object.prototype
// const pai =  {__proto__ : avo , attr2: 'B'  , attr3: 'D' } //O Pai ,tem como prototipo o avo
// const filho = { __proto__ : pai, attr3: 'C' } //O filho, tem como prototipo o pai

// // console.log(filho.attr0 , filho.attr1 , filho.attr2 , filho.attr3)

// const carro = {
//     velAtual: 0,
//     velMax: 200,
//     acelerar(delta) {
//         if(this.velAtual + delta <= this.velMax){
//             this.velAtual += delta
//         }else{
//             this.velAtual = this.velMax
//         }
//     },
//     status() {
//         return `${this.velAtual}Km/h de ${this.velMax}`
//     }
// }

// const ferrari = {
//     modelo: 'Ferrari',
//     velMax: 324 //Atributo 'shadowing' , vai sobrepor o atributo velMax do objeto Carro
// }

// const volvo = {
//     modelo: 'V40',
//     status(){
//         return `Modelo ${this.modelo} : ${super.status()}`
//     }
// }

// Object.setPrototypeOf(ferrari , carro)
// Object.setPrototypeOf(volvo , carro)

// volvo.acelerar(150)
// console.log(volvo)
// console.log(volvo.status())
// console.log(``)
// ferrari.acelerar(150)
// console.log(ferrari)
// console.log(ferrari.status())



const pessoa = {
    nome: '',
    idade: 0,
    status() {
        return `${this.nome} tem ${this.idade} anos`
    }
}


const pessoa1 = {
    __proto__: pessoa,
    nome: 'Roberio',
    idade: 18
}

console.log(pessoa1.status())

const pessoa2 = {
    nome: 'Carlos',
    idade: 19,
    dataNasc: '20/06/2000',
    status() {
        return `${super.status()}, nascido em ${this.dataNasc}`
    }
}

Object.setPrototypeOf(pessoa2 , pessoa)

console.log(pessoa2.status())
