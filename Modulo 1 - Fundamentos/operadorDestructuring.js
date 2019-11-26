const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Henrique',
    endereco: {
        Rua: 'Rua C',
        numeroCasa: '257'
    }
}

const {nome , sobrenome} = pessoa //Tire de dentro do objeto pessoa os atributos nome e pessoa

console.log(nome)
console.log(sobrenome)

const {nome: n, sobrenome: s} = pessoa //Tire de dentro do objeto pessoa os atributos nome e pessoa

console.log(n , s)

const {Casa , Salario = 'Não muito'} = pessoa 

console.log(Casa , Salario)

const {endereco: {Rua: r , numeroCasa: nCasa}} = pessoa

console.log(r)
console.log(nCasa)