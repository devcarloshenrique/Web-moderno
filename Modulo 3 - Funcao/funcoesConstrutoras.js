function Carro(velocidadeMaxima = 200, delta = 5) {
    //Atributo Privado
    let velocidadeAtual  = 0

    //Metodo Público 
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMaxima 
        }
    } 

    // metodo publico 
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }

}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())


console.log(typeof Carro)
console.log(typeof uno)

