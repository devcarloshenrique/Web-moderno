//operador ... rest(juntar)/spread(espalhar)
//usar rest com paâmetro de função

const funcionario = {nome: 'Maria' , salario: 1234.99}
//spread
const clone = {ativo: true, ...funcionario}

// usar spread com array 
const grupoA = ['João','Pedro', 'Gloria']
const grupoFinal = ['Maria' , ...grupoA]

console.log(grupoFinal)

//operador rest

function mostrar(...a){
	console.log(a)
}

mostrar(1 , 2 , 3 ,4 , 5)