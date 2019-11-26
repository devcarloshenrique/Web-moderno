const passo1 = (ctx , next) => {
    ctx.valor = 'mid1'
    next()
}

const passo2 = (ctx , next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const execute = (ctx , ...minddeware) => {

    const executePassos = indice => {
    minddeware && indice < minddeware.length && 
        minddeware[indice](ctx , () => executePassos(indice + 1))
    
    }
    executePassos(0)
}

const ctx = {}

execute(ctx, passo1 , passo2 , passo3)

console.log(ctx)