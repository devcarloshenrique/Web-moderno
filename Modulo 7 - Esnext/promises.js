function falarDepoisDe(segundos , frase){
	return new Promise((resolve , reject) => {
		setTimeout(() => {
			resolve(frase)
		}, segundos * 1000)
	})
}


falarDepoisDe(3 , 'Que legal !')
	//Posso chamar o .then quantas vezes eu quiser
	.then(frase => frase.concat('?!?'))
	.then(outraFrase => console.log(outraFrase))
	//Tratar Erro
	// .catch(e => console.log(e))
