//instalando dependências |npm -i node-schedule@1.3.0|

const schedule = require('node-schedule')

//Vai execultar segunda feira, qualquer dia do mês, ás 12hrs
//de 5 em 5 segundos 

const tarefa1 = schedule.scheduleJob('*/1 * 10 * * 5', function(){
	console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function (){
	tarefa1.cancel()
	console.log('Cancelando Tarefa 1!')
}, 10000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1 , 5)]
regra.hour = 10
regra.second = 10

const tarefa2 = schedule.scheduleJob(regra , function(){
	console.log('Executando Tarefa 2!', new Date().getSeconds())
})
