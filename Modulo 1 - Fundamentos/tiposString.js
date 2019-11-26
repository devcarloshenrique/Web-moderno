const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charCodeAt())
console.log(escola.indexOf('1')) 

console.log(escola.substring(1)) //Todos os indices menos o 1
console.log(escola.substring(0,3)) //Vai do indice 1 ao 2

console.log('Escola'.concat(escola).concat('!'))
console.log('Escola ' + (escola) + (' !'))

console.log(escola.replace(3,'e'))

console.log(escola.replace(/\w/g,'e')) // vai substituir todos os caracteres por 'E'

console.log('Ana,Maria,Pedro,Tiago,Carlinhos'.split(',')) // Vai gerar um Array e utilizar como separador ','



