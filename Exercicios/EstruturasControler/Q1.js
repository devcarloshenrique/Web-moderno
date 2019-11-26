console.log('-- For --')
console.log('-- Faça um Array de 1 a 10, fazendo o loop com (for in) e (for of)')

const Array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (a in Array1) {
    // console.log(`Array[${a}] = ${Array1[a]}`)
}

for (a of Array1) {
    // console.log(`Array[?] = ${a}`)
}

console.log(`-- Faça um Array de 1 a 10, utilizando for e Array.length`)

const Array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let a = 0; a < Array2.length; a++) {
    // console.log(`Array [${a}] = ${Array2[a]}`)
}

console.log(`-- Faça um objeto que tem como atributo nome , sobreNome e dataNasc,imprima os dados utilizando
 (for in).`)

const obj1 = {
    nome: 'Carlos',
    sobreNome: 'Henrique',
    endereco: {
        rua: 'Rua sete',
        endereco: '257'
    }
}

for (a in obj1) {
    // console.log(` ${a} = ${obj1[a]}`)
}

console.log(`-- Break e Continue --`)
console.log(`-- Faça um Array de 1 a 10, faça dois loops, um deles na chave[5] você autiliza break e no
 outro loop na chave[5] você utiliza continue.`)

const Array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (a in Array3) {
    if (a == 5) {
        break
    }
    // console.log(`Array[${a}] = ${Array3[a]}`)
}

for (a in Array3) {
    if (a == 5) {
        continue
    }
    // console.log(`Array [${a}] = ${Array3[a]}`)
}

console.log(`-- While e Do/While -- `)
console.log(`-- Faça uma função que retorna um valor aleatorio entre dois parametros(min = 0 , max = 10). 
Faça dois loops utilizando While e Do/While, os loops vão continuar em quanto uma variavel limitador for != 5`)

function metRandom(min, max) {
    const result = Math.random() * (max - min) + min
    return Math.floor(result)
}

let opcao = 0

while (opcao != 5) {
    opcao = metRandom(0, 10)
    // console.log('opção:' + opcao)
}

do {
    opcao = metRandom(0, 10)
    // console.log('opção:' + opcao)
} while (opcao != 5)

console.log(`If Else If`)
console.log(`-- Faça uma função utilizando Number.prototype que tem como parametro (inicio , fim) e deve 
retornar 'true' casa receba um valor entre (inicio e fim). Utilizando ifElseIf faça um sistema de notas.`)

Number.prototype.funcao1 = function (min, max) {
    return this >= min && this <= max
}

function checar(nota) {
    if (nota.funcao(9, 10)) {
        // console.log('Nota >= 9 && nota <= 10')
    } else {
        // console.log('Nota <= 9')
    }
}
// checar(8) chamando

console.log(`-- Switch / Case --`)
console.log(`-- Faça uma função utilizando Switch Case, em que dependendo da nota apareça uma mensagem diferente`)

function nota(nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
        case 8: console.log(`Nice nota`) 
        break
        case 7:
        case 6: console.log(`Está na média`)
        break
        case 5:
        case 4:
        case 3:
        case 2:
        case 1: console.log(`Recuperação `)
        break

    }
}

// nota(9)
// nota(6)
// nota(5)