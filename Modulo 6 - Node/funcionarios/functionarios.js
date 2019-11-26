const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') //Cliente Http 

const a = axios.get(url).then(function (response) {

    const chineses = p => {return p.pais = 'China'}
    const mulheres = p => {return p.genero = 'F'}
    const menorSalario = function (func , funcAtual){
        return func.salario < funcAtual.salario ? func : funcAtual
    }

    const func = response.data
        .filter(mulheres)
        .filter(chineses)
        .reduce(menorSalario)

    console.log(func)
}) 
