function tratarErroELancar(erro){
    // throw new Error('....')   
    
    throw {
        // name: errroname,
        // msg: erro.message,
        date: new Date
    }
}

function imprimirNome(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!!')
    } catch(e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final')
    }
}

const obj = { name: 'Roberto' }
imprimirNome(obj)

