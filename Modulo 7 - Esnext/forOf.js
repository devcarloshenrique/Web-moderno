for (let Letra of "Cod3er"){
	console.log(Letra)
}

const assuntosEcma = ['Map', 'Set' , 'Promise']

//Valores
for(let i of assuntosEcma){
	console.log(i)
}

//Indices
for(let i in assuntosEcma){
	console.log(i)
}


const assuntosMap = new Map([
	['Map' , {abordado: true}],
	['Set', {abordado: true}],
	['Promise', {abordado: false}]
])

for(let assunto of assuntosMap){
	console.log(assunto)
}

for(let assunto of assuntosMap.keys()){
	console.log(assunto)
}

for(let assunto of assuntosMap.values()){
	console.log(assunto)
}

for (let [ch , vl] of assuntosMap.entries()){
	console.log(ch , vl)
}
