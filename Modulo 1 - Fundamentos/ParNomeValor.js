//Par Nome/Valor
const saudacao = 'Opa'

function exec(){
    const saudacao = 'Falaaa'
    return saudacao
}

// Objetos são agrupados aninhados de pares nome/valor
const cliente = {
    nome: 'Carlos',
    sobreNome: 'Henrique',
    peso: '90',
        endereco: {
            profissoa: 'Programador Web',
            salario: 'Não muito'
        }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)