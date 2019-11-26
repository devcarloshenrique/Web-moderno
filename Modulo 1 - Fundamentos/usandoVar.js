{ 
    {
        {
            {
                   var sera = 'Será????' 
            } 
        } 
   } 
}
//Variavel Var fica visivel fora do bloco
console.log(sera)

function teste(){
    var local = 123
}

console.log(teste)

/*Variaveis globais ficam todas juntas em um mesmo escopo, portanto não é muito bom
* usar, pois em um projeto grande, o risco de sobreescrever algo é auto. 
*/

var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}

console.log('fora',numero)
