// const fs = require('fs')
// //__dirname == diretorio atual
// const caminho = __dirname + '/arquivo.json'

// // sicrona...

// const conteudo = fs.readFileSync(caminho , 'utf-8')

// // console.log(conteudo)

// // assincrona

// fs.readFile(caminho, 'utf-8' , (err , conteudo) => {
//     const config = JSON.parse(conteudo)

//  //  console.log(config)

// })


//  const config = require('./arquivo.json')

//   console.log(config)

// fs.readdir(__dirname, (err , conteudo) => {
//     console.log(conteudo)

// }) 

  const json = require('./popshop.json')

  json.forEach(function (a , b , c){
      console.log(a)
  })


  