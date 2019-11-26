const fs = require('fs') // fs é um módulo do node  

const produto = {
    nome: 'Celular',
    preco: '1249.99',
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo')
})