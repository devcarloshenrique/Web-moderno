class Lancamento {
    constructor(nome = 'Generico' , valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes , ano){
        this.mes = mes
        this.ano = ano
        this.lancamento = []
    }

    addLancamentos(...lancamento){
        lancamento.forEach(a => this.lancamento.push(a))
    }

    sumario(){
        let valorConsolidade = 0
        this.lancamento.forEach(a => {
            valorConsolidade += a.valor
        })
        return valorConsolidade
    }
}

const salario = new Lancamento('Salario' , 45000)
const contaLuz = new Lancamento('Luz' , -220)

const contas = new CicloFinanceiro( 6 , 2018)
contas.addLancamentos(salario , contaLuz)
console.log(contas.sumario())
