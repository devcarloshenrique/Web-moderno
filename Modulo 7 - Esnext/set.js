
const times = new Set()

times.add('Vasco')
times.add('São Paulo').add('Palmeiras')
times.add('Flamengo')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))


const nomes = ['Raquel','Lucas','Julia']
const nomesSet = new Set(nomes)
console.log(nomesSet)