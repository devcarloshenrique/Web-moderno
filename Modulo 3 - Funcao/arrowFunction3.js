let comparaComThis = function (param) {
    console.log(this === param)
}
//No caso do Browser o objeto o this se refere ao objeto global window
//No caso do Node o this é igual ao objeto global global
comparaComThis(global) // this == global

const obj = {}
//Determinando que o contexto lexico da função comparaComThis é o mesmo do obj
comparaComThis = comparaComThis.bind(obj) //Determinando que this == obj{ tudo  que está aqui }
comparaComThis(global) //Logo o objeto global mudo
comparaComThis(obj) // this == obj{ esse escopo está agora está definido como objeto global }


//Exemplo básico de como mudar o contexto lexico, atribuindo o this == obj2{ }
function mostrar() { return console.log(this.nome) }

const obj2 = {
    nome: 'Carlos'
}

mostrar = mostrar.bind(obj2)
mostrar()

//Contexto lexico em Arrow Function 
let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global)// False
comparaComThisArrow(this)// true
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)







