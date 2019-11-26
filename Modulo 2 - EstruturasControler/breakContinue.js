const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in Array) {
    if (x == 5) {
        break
    }
    // console.log(`Array[${x}] = ${Array[x]}`)
}

for (x in Array) {
    if (x == 5) {
        continue // Pulo a chave Array[5]
    }
    // console.log(`Array[${x}] = ${Array[x]}`)
}

externo: for (a in Array) {
    for (b in Array) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b} `)
    }

}
