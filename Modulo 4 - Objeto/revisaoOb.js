//coleção dinâmica de pares chaves/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generico'
produto.preco = 220

// console.log(produto)

// delete produto.preco

// console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 880000,
    proprietario: {
        nome: 'Carlos',
        sobreNome: 'Henrique',
        idade: 19,
        endereco: {
            rua: 'Av. N',
            numeroCasa: '257'
        }
    },
    //Array de objetos
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function () {
        //...
        console.log('Ola mundo')
    }
}