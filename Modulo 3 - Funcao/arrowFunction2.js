//This não varia, contexto lexico é o mesmo 

function Pessoa() {
    this.idade = 0

    setInterval( () => {
        this.idade++
        console.log(`Idade: ${this.idade}`)
    },1000)
}

new Pessoa

