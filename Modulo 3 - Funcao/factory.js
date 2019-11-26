// Factory Simples é uma função que retorna um objeto

function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

function criarProduto(nome , preco){
    return {
        nome,
        preco,
        descont: 0.1
    }
}

console.log(criarProduto('Arroize','4.99'))
