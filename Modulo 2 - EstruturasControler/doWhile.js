function opcao(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let limitador = -1

do {
    limitador = opcao(-1, 10)
    console.log(`Limitador: ${limitador}`)
} while (limitador != -1)

