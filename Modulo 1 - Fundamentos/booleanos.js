let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)
console.log(!isAtivo)
console.log(!!isAtivo)

console.log(!true)
console.log(!false)

isAtivo = 0
console.log(isAtivo)
console.log(!isAtivo)
console.log(!!isAtivo)

isAtivo = 1
console.log(isAtivo)
console.log(!isAtivo)
console.log(!!isAtivo)

// Verdadeiros
console.log('Verdadeiros')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!!{})
console.log(!![])
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!('' || null || 0 || ` `))

//Falsos 
console.log('Falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))


// Finalizando
let nome = ``
console.log(nome || `Desconhecido`)















