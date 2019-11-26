function compras(trabalho1, trabalho2) {
    const comprarSovete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) 
    const comprarTv32 = trabalho1 != trabalho2 //operador binário
    const manterSaudavel = !comprarSovete

    // return {
    //     Sorvete: comprarSorvete,
    //     Tv32: comprarTv32,
    //     Tv50: comprarTv50,
    //     Saudavel: manterSaudavel
    // } criei um objeto

    // Recurso novo ecma script 2015

    return { comprarSovete , comprarTv50 , comprarTv32 , manterSaudavel }
}

console.log(compras(true , true))
console.log(compras(false , false))