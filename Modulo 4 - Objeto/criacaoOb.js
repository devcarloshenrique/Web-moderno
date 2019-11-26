 // Usando notação Literal

 const obj1 = {

 }

//Object em JS
const obj2 = new Object()

//Funções construtoras
function Produto(nome, preco , desc ){
    this.nome = nome
    this.preco = preco
    this. desc = desc
    this.getPrecodesconto = () => {
        return  console.log(preco * (1 - desc))
    }
}

const p1 = new Produto('Carlos' , 200 , 0.50)
// p1.getPrecodesconto()

// Função Factory 

function criarFuncionario(nome , salarioBase , faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Carlos' , '600' , '0')
// console.log(f1.getSalario())

//Object.create 

const filha = Object.create(null)
filha.nome = 'Sarah Filha'
// console.log(filha)

//Função que retorna Objeto

const fromJSON = JSON.parse('{"info": "Sou um json"}')
console.log(fromJSON)