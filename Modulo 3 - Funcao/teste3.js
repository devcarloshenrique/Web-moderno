let numeroPatos = 10

for (var cont = 1; cont <= numeroPatos;) {
    let foi = numeroPatos - cont + 1
    let volto = numeroPatos - cont

    if (foi == 1) {
        console.log(`
    ${foi} patinho
    Foi passear
    Além das montanhas
    Para brincar`)
    } else {
        console.log(`
    ${foi} patinhos
    Foram passear
    Além das montanhas
    Para brincar`)
    }

    if (volto > 1) {
        console.log(`
    A mamãe gritou
    Quack quack quack quack
    Mas só ${volto} patinhos
    Voltaram de lá`)
    } else if (volto == 1) {
        console.log(`
    A mamãe gritou
    Quack quack quack quack
    Mas só ${volto} patinho
    Voltaram de lá`)

    } else {
        console.log(`
    A mamãe gritou
    Quack quack quack quack
    Mas nenhum patinho
    Voltou de lá`)

        console.log(`
    A mamãe patinha
    Foi procurar
    Além das montanhas
    Na beira do mar
    A mamãe gritou
    Quack quack quack quack
    E os ${numeroPatos} patinhos
    Voltaram de lá`)
    }

    cont++
}
