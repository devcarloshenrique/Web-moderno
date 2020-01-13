

# Exercicios do curso [Web Moderno](https://www.udemy.com/course/curso-web/)
   
   - Este repositorio foi criado com o objetivo de enfatizar os **principais conhecimentos** adquiridos no curso [Web Moderno](https://www.udemy.com/course/curso-web/).
   
   ## Índice
   
   ### JavaScript
   
   #### Estruturas de controle
   
   1. [For in](#for-in)
   2. [For of](#for-of)
   3. [For](#for)
   4. [While](#while)
   5. [Do while](#do-while)
   6. [If else](#if-else)
   7. [Switch Case](#switch-case)
   8. [ForEach](#foreach)
   
   
   #### Array 
   
   1. [Array literal.](#array-literal)
   2. [Array push](#array-push)
   3. [Array pop](#array-pop)
   4. [Array ForEach](#array-foreach)
   5. [Array com split](#array-split)
   6. [Array com operador destructuring](#utilizando-operador-destructuring-com-array)
   
   #### Funções 
   
   1. [Função dentro de variavel.](#funcao-dentro-de-variavel)
   2. [Arrow function.](#arrow-function)
   3. [Function Factory.](#function-factory)
   4. [Definindo que o escopo da função é um objeto.](#definindo-que-o-escopo-da-funcao-e-um-objeto)
   5. [Passando função por parametro.](#passando-funcao-por-parametro)
   6. [for in arguments.](#for-in-arguments)
   7. [Utilizando bind para definir o escopo de uma função.](#utilizando-bind-para-definir-o-escopo-de-uma-funcao)
   8. [Entendendo o this.](#entendendo-o-this)
   9. [Criando uma Class](#criando-uma-class)
   10. [Utilizando Apply e Call para definir o escopo de uma função](#utilizando-apply-e-call-para-definir-o-escopo-de-uma-funcao)
   

   
   #### Objeto
   
   1. [Criando objeto de forma literal](#criando-objeto-de-forma-literal)
   2. [Criando função dentro de objeto](#criando-funcao-dentro-de-objeto)
   3. [Criando objeto de função](#criando-objeto-de-funcao)
   4. [Utilizando destructuring com objeto](#utilizando-destructuring-com-objeto)
   5. [New object](#new-object)
   6. [Criando um objeto por meio de uma função factory](#criando-um-objeto-por-meio-de-uma-funcao-factory)
   7. [Object freeze](#object-freeze)
   8. [Getters e Setters](#getters-setters)
   9. [Object keys, values e entries](#object-keys-values-entries)
   10. [Object prototype](#object-prototype)


   
   ### Css
  
   #### Conceitos
   
   1. [Anatomia Css.](#anatomia-css)
   2. [Estilos Css Interno, Externo e Inline.](#estilos-css)
   3. [Integrando Css em página HTML.](#integracao-css)
   4. [Seletores Css.](#seletores-css)
   5. [Especificidade Css.](#especificidade-css)
   6. [Herança Css.](#heranca-css)
   7. [Box Model.](#box-model)
   8. [Margin Collapsing](#margin-collapsing)
   
   #### Flex Box

   1. [Introdução Flex Box](#introducao-flex-box)
   2. [Flex-Grow](#flex-grow)
   3. [Flex-Shrink](#flex-shirink)
   4. [Flex-Basis](#flex-basis)
   5. [Flex](#flex)
   6. [Flex-direction](#flex-direction)
   7. [Flex-order](#flex-order)
   8. [Justify-Content](#justify-content)
   9. [Align-Items](#align-items)
   10. [Align-Self](#align-self)

   
   ### JavaScript
   
   #### Estrutura de controle

   #### <a name="for-in">1. For-in</a>
   
   ```
   var person = {fname:"John", lname:"Doe", age:25};

   var text = "";
   
   var x;
   
   for (x in person) {
   
      text += person[x] + " ";
   
   }

   ```
   
   #### <a name="for-of">2. For-of</a>
      
   ```
   
   var cars = ['BMW', 'Volvo', 'Mini'];
   
   var x;

   for (x of cars) {

      document.write(x + "<br >");

   }
   
   ```
   
   #### <a name="for">3. For</a>
      
   ```
   
   var text = "";
   
   var i;
   
   for (i = 0; i < 5; i++) {
  
      text += "The number is " + i + "<br>";
   
   }
   
   ```
   
   #### <a name="while">4. While</a>
      
   ```
   var text = "";

   var i = 0;

   while (i < 5) {
   
      text += "<br>The number is " + i;
      
      i++;
   
   }
   
   ```
   
   #### <a name="do-while">5. Do-While</a>
      
   ```
   
      var text = "";

      var i = 0;
      
      do {
      
         text += "The number is " + i;
      
         i++;
      
      }
      
      while (i < 5);
   
   ```
   
   #### <a name="if-else">6. If else</a>
      
   ```
   
   var time = new Date().getHours();
   
   if (time < 20) {
  
      document.getElementById("demo").innerHTML = "Good day";

   }
   
   ```
   
   #### <a name="switch-case">7. Switch case</a>
      
   ```
   
   var text = "Banana";

   var fruits = document.getElementById("myInput").value;

   switch(fruits) {

     case "Banana":

       text = "Banana is good!";

       break;

     case "Orange":

       text = "I am not a fan of orange.";

       break;

     case "Apple":

       text = "How you like them apples?";

       break;

     default:

       text = "I have never heard of that fruit...";
   }
   
   ```
   
   #### <a name="foreach">8. ForEach </a>
   
   ```
   
   const array = [1 ,2 ,3 ,4 ,5]
   
   array.forEach((valor, chave, array) => {
   
   console.log(`[ ${chave} ] ` => ${valor})
   
   })

   ```
   
   #### Array
   
   #### <a name="array-literal">1. Criando array de forma literal.</a>
   
   ``` 
   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   
   ```
   #### <a name="array-push">2. Array push.</a>
   
   ``` 
   const array = [1, 2, 3]
   
   array.push(4, '5')
   
   array = [1, 2, 3, 4, 5]
   
   ```
   #### <a name="array-pop">3. Array pop.</a>
   
   ``` 
   const array = [1, 2, 3, 4, 5]
   
   array.pop()
   
   array = [1, 2, 3, 4]
   ```
   #### <a name="array-foreach">4. Array ForEach.</a>
   
   ```
      Array7.forEach(function (Valor, Chave, Array) {
    
         console.log(`Valor ${Valor} Chave ${Chave} Array => ${Array}`)
    
      })
      
   ```
   #### <a name="array-split">5. Array com split.</a>
   
   ```
   const string = 'Carlos,Ana,Milton,Hudson,Rogerio'
   
   const array = string.split(',')
   
   array = [ 'Carlos', 'Ana', 'Milton', 'Hudson', 'Rogerio' ]
   
   ```
   
   #### <a name="utilizando-operador-destructuring-com-array">6. Utilizando operador destructuring com array </a>
   
   ```
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, [11, 12, 13]]

      const [valor1, , , , , , , , , , valor2] = array
      
      console.log(valor1 + valor2)
   
   ```
   
   #### Funções
   
   #### <a name="funcao-dentro-de-variavel">1. Função dentro de variável</a>
   
   ```
      const funcao = function(){
      
         console.log('Ola');
         
      }
      
   ```
   
   #### <a name="arrow-function">2. Arrow function</a>
   
   ```
      const funcao = (a) => {
      
         console.log(a);
      
      }
      
   ```
      
   #### <a name="function-factory">3. Function factory </a>
   
   ```
   function mostrar(nome, sobrenome) {
   
      return {nome, sobrenome}
   
   }
   
   ```
   #### <a name="definindo-que-o-escopo-da-funcao-e-um-objeto">4. Definindo um objeto como escopo da função</a>
   
   ```
   function mostrar() {
   
      return console.log(`Ola meu nome é ${nome}`)
   
   }
   
   const objeto = {
   
      nome: 'Carlos Henrique'
   
   }
   
   objeto.mostrar();
   
   ```
   #### <a name="passando-funcao-por-parametro">5. Passando uma função como parâmetro.</a>
   
   ```
   function imprimir(mensagem) {
   
      mensagem();
   
   }
   
   imprimir( () => { console.log('chamando function mensagem'); })
   
   ```
   
   #### <a name="for-in-arguments">6. For-in arguments </a>
   
   ```
   function soma() {
   
   let soma = 0
   
   for (i in arguments){
   
      soma += arguments[i]
   
   }
      
   return soma
   
   }
   
   ```
   
   #### <a name="utilizando-bind-para-definir-o-escopo-de-uma-funcao">7. Utilizando bind para definir o escopo de uma função. </a>
   
   ```
      cosnt objeto = {

         nome: 'Carlos',

         mostrarNome() {

            console.log(this.nome)

         }
      
      }
      
      const falar = objeto.mostrarNome.bind(objeto)
      
      falar()
   
   ```
   
   #### Exemplo 2 
   
   ```
   function idade() {

      this.idade = 0

      setInterval(function () {

         this.idade++

         console.log(this.idade)

      }.bind(this), 1000)
      
   }
   
   idade()
   
   ```
   
   #### <a name="entendendo-o-this">8. Entendendo o this</a>
   
   ```
   
   console.log(this === global) // false
   
   console.log(this === module) // false

   console.log(this === module.exports) //true
   
   console.log(this === exports) //true

   function Thislog() {

       console.log(this === module.exports) // false
       
       console.log(this === global) // true
       
       console.log(this === exports) // false

   }

   Thislog()
   
   ```
   
   #### <a name="criando-uma-class">9. Criando uma class</a>
   
   ```
   class Pessoa {
   
      constructor(nome) {
      
         this.nome = 'Carlos'
         
      }
      
      mostrarNome() {
      
         console.log(`Meu nome é ${this.nome}`)
      
      }
   
   }
   
   const objeto = new Pessoa('Carlos')
   
   objeto.mostrarNome();
   
   ```
   
   #### <a name="utilizando-apply-e-call-para-definir-o-escopo-de-uma-funcao">10. Utilizando Apply e Call </a>
   
   ```

   function valor(imposto = 0, moeda = 'R$') {

      return `${moeda} ${this.preco  * (1 - this.desc) * (1 + imposto)}`

   }

   const obj4 = {
      preco: 5000,
      moeda: '$',
      desc: 0.15,
      imposto: 0.15,
      valor
   }

   //Sem utilizar Call ou Apply

   console.log(obj4.valor(0.20, '$')) // $ 5100

   //Não é recomendado, utilizar a variavel global.
   
   global.preco = 5000

   global.desc = 0.15

   console.log(valor(0.20, '$')) // $ 5100

   //utilizando Call ou Apply

   console.log(valor.apply(obj4 , [0.20 , '$'])) // $ 5100

   console.log(valor.call(obj4 , 0.20 , '$')) // $ 5100
   
   ```
   
   
   
   
   #### Objeto
   
   
   #### <a name="criando-objeto-de-forma-literal">1. Criando objeto de forma literal.</a>
   
```
const obj = {}

obj.nome = 'Carlos';

obj.['sobrenome'] = 'Henrique';     
```
   
   #### <a name="criando-funcao-dentro-de-objeto">2. Criando função dentro de um objeto. </a>
   
```
const obj = {

   mostrar: function() {

      console.log('Ola mundo');

   }

}
```

   #### <a name="criando-objeto-apartir-de-uma-funcao-construtora">3. Criando um objeto apartir de uma função construtora</a>

```
function mostrar() {
       
       this.nome = 'Carlos'
       
       this.funcao = function () {
           
           console.log('Ola Mundo')
       
       }
    
    }
    
    const objeto = new mostrar()
    
    objeto.funcao()
```
   
   #### <a name="utilizando-destructuring-com-objeto">4. Utilizando operador destructuring com objeto </a>
   
```
   const objeto = {
      nome: "Carlos",
      sobrenome: "Henrique"
   }
   
   const {nome: n, sobrenome: s} = objeto
   
   console.log(n + " " + s)
```

   #### <a name="new-object">5. New object</a>

```
const objeto = new Object({

   nome: 'Carlos Henrique',

   mostrarNome() {

      console.log(this.nome)

   }

})
```

   #### <a name="criando-um-objeto-por-meio-de-uma-funcao-factory">6. Criando um objeto por meio de uma função factory.</a>

```
const objeto = Object.create({}, {

   nome: {value: 'Carlos', enumerable: true, writable: true},

   mostrarNome: {

           value: function () {
           
               return console.log(this.nome)
           
          }
       
       }

})
```

   #### <a name="object-freeze">7. Object freeze</a>

```
const objeto = {
   
   nome: 'Carlos'

}

Object.freeze(objeto);  
```

   #### <a name="getters-setters">8. Getters e Setters</a>

```
const objeto = {
   
   _nome: '',

   set Nome(nome){

      this._nome = nome

   },

   get Nome(){

      return this.nome

   }
   
}

objeto.nome = 'Carlos';

console.log(objeto.nome);
```

   ####  <a name="object-keys-values-entries">9. Object keys, values e entries</a>

```
const Pessoa = {
    nome: 'Carlos',
    
    peso: '72kg',
    
    idade: '19',
    
    endereco: 'Rua sete casa 279',
    
    mostrar() {
    
        console.log(`Meu nome  é ${this.nome}
    
    }

}

// --> Object.entries

console.log(Object.keys(Pessoa))

// [ 'nome', 'peso', 'idade', 'endereco', 'mostrar' ]

// --> Object.values

console.log(Object.values(Pessoas))

// [ 'Carlos', '72kg', '19', 'Rua sete casa 279', [Function: mostrar] ]

// --> Object.entries(Pessoas)

Object.entries(Pessoa).forEach(a => {
  
    console.log(a)
    
    // console.log(a[0])
    
    // console.log(a[1])

})

//[ 'nome', 'Carlos' ]
//[ 'peso', '72kg' ]
//[ 'idade', '19' ]
//[ 'endereco', 'Rua sete casa 279' ]
//[ 'mostrar', [Function: mostrar] ]
```

   #### <a name="object-prototype">10. Object prototype</a>

```
const pai = {

   sobrenome: 'Carvalho',

}

const filho = {
   __proto__: pai,
   
   nome: 'Carlos Henrique',
   
   idade: 19,
   
   status() {
   
      return `Meu nome é ${this.nome} ${this.sobrenome} eu tenho ${this.idade} anos`
      
   }
}

console.log(filho.status())

// Meu nome é Carlos Henrique Carvalho eu tenho 19 anos

``` 
   
   
   ### CSS
   
   #### <a name="anatomia-css">1. Anatomia Css.</a>
   
   #### Conceito
   
   O CSS estipula regras para o arquivo em html. Com cada regra é possível estilizar o conteúdo todo ou somente determinados elementos. Por isso entenda, um comando básico é composto por seletor e declarações, que contém propriedade e valor.
    
         Exemplo: 
            SELETOR {PROPRIEDADE: VALOR}
   
   ### <a name="estilos-css">2. Estilos Css Interno, Externo e Inline.</a>
   
   #### - Css Interno
         
   Estilos CSS feitos desta forma são carregados cada vez que um site é atualizado, o que pode aumentar o tempo de carregamento.
   
   #### - Css Externo
         
   Tudo é feito externamente em um arquivo .css. Isso significa que você pode fazer todo o estilo em um arquivo separado e aplicar o CSS a qualquer página desejada.
   
   #### - Css Inline
         
   Inline trabalha com elementos específicos que possuem a tag <style>. Cada componente deve ser estilizado, por isso talvez não seja o melhor ou o mais rápido para lidar com CSS.
   
      Exemplo:
         <p style="padding: 100px;">Lorem...</p>
   ### <a name="integracao-css">3. Integrando Css em página HTML.</a>
   
   E é com tags de referência que você avisa ao HTML que existe um arquivo de estilo para ele, veja:
      
      Exemplo:
         <link rel=”stylesheet” type=”text/css” href=”estilo.css”>
   Esta tag vai indicar ao HTML que tem um arquivo CSS para ser adicionado à  página. Isto deve ser adicionado dentro da tag <head> </head> do seu HTML.
   
   ### <a name="seletores-css">4. Seletores Css e suas variações.</a>
   
   No CSS, este código inteiro é uma regra. Esta regra inicia com strong, que é um seletor.
   
      Exemplo:
         strong {
            color: red;
         }  
         
   #### - Tipos de Seletores
   
      Exemplo:
         <p class="chave" id="principal">
   
   #### - Seletores com Classe
   
   Em seu CSS, digite um ponto final antes do nome da classe para usar como um seletor.
      
      Exemplo: 
         .chave {
            color: green;
         }
   
   #### - Seletores com ID
   
   Em seu CSS, digite cerquilha (#) antes do ID quanto estiver usando em um seletor ID.
     
      Exemplo: 
         #principal {
            font-weight: bolder;
         }
   
   **Você não está restrito aos dois atributos** especiais, **class e id**. Você pode especificar outros atributos usando colchetes.
   
   Dentro dos colchetes você insere o nome do atributo, opcionalmente seguido por um operador correspondente e um valor. Além disso, a seleção pode ser feita case-insensitive adicionando um "i" depois do valor, mas nem todos os browsers suportam esta funcionalidade ainda.

   ```
      [disabled]
      Seleciona todos os elementos com o atributo "disabled".
      
      [type='button']
      Seleciona todos os elementos do tipo "button".
      
      [class~=key]
      Seleciona elementos com a classe "key" (mas não ex: "keyed", "monkey", "buckeye"). Funcionalmente equivalente a .key.
      
      [lang|=es]
      Selects elements specified as Spanish. This includes "es" and "es-MX" but not "eu-ES" (which is Basque).
      
      [title*="example" i]
      Seleciona elementos cujo título contém "exemplo", ignorando maiúsculas e minúsculas. Nos navegadores que não suportam o sinalizador "i", esse seletor provavelmente não corresponderá a nenhum elemento.
      
      a[href^="https://"]
      Seleciona links seguros.
      
      img[src$=".png"]
      IIndiretamente seleciona imagens PNG; qualquer imagem que seja PNG mas que a URL não termine em ".png" (como quando elas são uma query string) não serão selecionadas.
   
   ```
   
   ####  Seletores de pseudo-classes
   
   Uma pseudo-classe em CSS é uma palavra-chave adicionada aos seletores que especifica um estado especial do elemento a ser selecionado. Por exemplo  :hover, aplicará um estilo quando o usuário passar o mouse sobre o elemento especificado pelo seletor.
   
   **Mais Informações**
   
   - [Pseudo-classes](https://www.w3schools.com/css/css_pseudo_classes.asp)

   - [Pseudo-elements](https://www.w3schools.com/css/css_pseudo_elements.asp)

   - [Nth-child](https://www.w3schools.com/cssref/sel_nth-child.asp)
   
   ### <a name="especificidade-css">5. Especificidade Css</a>
   
   #### Conceito
   
   A especificação é a maneira de como os navegadores definem quais valores de propriedades são os mais relevantes para o elemento a ser utilizado. A especificação é baseada apenas nas regras impostas na composição de diferentes tipos de seletores.
   
   A espeficicação é calculada na concatenação da contagem de cada tipo de seletor. Não é um peso aplicado na expressão correspondente.

   No caso de igualdade de especificação, a última declaração encontrada no CSS é aplicada ao elemento.
   
   **Calculando especificidade**
   
   -   **CSS inline:** 1000 pontos;
   -   **ID:** 100 pontos;
   -   **Classes, pseudo-classe e atributos:** 10 pontos;
   -   **Elementos:** 1 ponto.
   
   - [Specificity Calculator](https://specificity.keegan.st/)
   
   #### A exceção **!important**
   
   Quando a regra **!important** é utilizada na declaração do estilo substitui qualquer outra declaração feita no CSS, onde quer que esteja na lista de declaração. Contudo, !important não tem nada haver com especificação.
   
   ### <a name="heranca-css">6. Herança Css</a>
   
   No CSS você herda as regras de um elemento pai.
   
        
    Todo o conteúdo textual do documento
    terá 16px de tamanho, pois herdam do
    `body`.
       
    ```
     body {
       font-size: 16px;
     }
    ```
   
   -  [Entendendo os valores ‘initial’ e ‘inherit’ do CSS](https://tableless.com.br/entendendo-os-valores-initial-e-inherit-do-css/)
   
   ### <a name="box-model">7. Seletores Css e suas variações.</a>
   
   Todos os elementos HTML podem ser considerados como caixas. No CSS, o termo "modelo de caixa" é usado quando se fala em design e layout.
   
   <p align="center"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNFOOh_-GfUbHkQKzfelFAD-kMhdsg8b5G04j5jNw1nc41-3LE"></img></p>
   
   -  **Conteúdo** - o conteúdo da caixa, onde o texto e as imagens aparecem
   -  **Preenchimento** - Limpa uma área ao redor do conteúdo. O estofamento é transparente
   -  **Borda** - uma borda que circunda o preenchimento e o conteúdo
   -  **Margem** - Limpa uma área fora da borda. A margem é transparente
   ```
      div {
        width: 300px;
        border: 15px solid green;
        padding: 50px;
        margin: 20px;
      }
   ```
            
   ### <a name="margin-collapsing">8. Margin Collapsing.</a>

   #### Conceito
   
   As margens superior e inferior dos blocos às vezes são combinadas(colapsadas/reduzidas) para uma única margem cujo o tamanho é a maior das margens (se os elementos tiverem a mesma margem, uma delas não será somada), combinado a ele, um comportamento conhecido como **margin collapsing**.
   
   #### - Irmãos adjacentes
   
As margens de irmãos adjacentes são colapsadas (execeto quando  o último irmão precisar ser limpado devido ao uso de floats  em elementos anteriores ).
   
   #### - Pai e primeiro/último filho
   
   Se não houver border, padding, parte inline, contexto de formatação de bloco criado ou livre para separar o margin-top de um bloco do margin-top do seu primeiro bloco filho, ou nenhum border, padding, conteúdo inline, height, min-height, ou max-height para separar o  margin-bottom de um bloco do margin-bottom do seu último filho, então essas margens colapsam. A margem colapsada acaba fora do pai.
   
   #### - Blocos vázios
   
   Se não houver border, padding, conteúdo inline, height, ou  min-height para separar um bloco margin-top de sua margin-bottom, então as margens superior e inferior são colapsadas.
   
   [Mais informações](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Box_Model/margin_collapsing)
   

  ### <a name="introducao-flex-box">1. Introdução Flex-Box</a>

Para trabalhar com **Flex Box** é necessário criar primeiramente um container e aplicar :

```
    .flex-container {
      display: flex;
   }
```
  ### <a name="flex-grow">2. Flex-Grow </a>

Da tamanho ao elemento preenchendo os espaços vazios.

```
.flex-container {
  display: flex;
  background-color: #f1f1f1;
}

.flex-container > div {
  background-color: DodgerBlue;
  color: white;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}

<body> 

<div class="flex-container">  
   <div style="flex-grow: 1">1</div>  
   <div style="flex-grow: 1">2</div>  
   <div style="flex-grow: 8">3</div>  
</div>

</body>
```
![image](https://user-images.githubusercontent.com/57951744/71489618-2e99cb80-2805-11ea-8a76-e4f73a6e74b2.png)

  ### <a name="flex-shirink">3. Flex-Shirink </a>

A propriedade `flex-grow` é geralmente usada em conjunto com flex-shrink e `flex-basis`, tendo como propriedade de declaração única `flex`

A propriedade `flex-shrink` especifica o _fator de encolhimento_ de um flex item.

![duNzzISFc-oJJ4pFXr9OvCNwF46JawATpzrx](https://user-images.githubusercontent.com/57951744/71489811-4b82ce80-2806-11ea-8803-a3c46c723f0a.gif)

![RITwrqDlcobhm-nFslcJ4ItB3yXdJbXNcAjy](https://user-images.githubusercontent.com/57951744/71490107-e039fc00-2807-11ea-8cb5-6103c2c88fad.gif)


  ### <a name="flex-basis">4. Flex-Basis </a>

O `flex-basis` é uma propriedade que utilizamos quando há a possibilidade de usar o `flex-grow` para "esticarmos" o elemento. Ele servirá, como o próprio nome diz, como uma base para eles. Se não alterar o valor padrão do `flex-basis` (`auto`), o valor usado como base será a largura e altura do próprio elemento. Caso passemos `0`, ele terá uma base em branco, então não aparecerá nada. Aí, se passarmos um `flex-grow`, ele "esticará" o elemento.

![basic](https://user-images.githubusercontent.com/57951744/71490246-a4536680-2808-11ea-9a44-ac4840f7e1df.gif)


  ### <a name="flex">5. Flex </a>

Flex é uma abreviação de crescimento, encolhimento e base - todos juntos.

O padrão é 0 (grow) 1 (shurink) e automático (basis).


![05-bXAiCAQUBtI9Ve-RIWGfqiEMtmRGWIxwM](https://user-images.githubusercontent.com/57951744/71490201-6d7d5080-2808-11ea-883c-6485e8b751e1.gif)

  ### <a name="flex-direction">6. Flex-Direction </a>
A propriedade [CSS] **`flex-direction`** define como os itens flexíveis são colocados no contêiner flexível, definindo o eixo principal e a direção (normal ou invertido).

```
div {
   flex-direction: row;
   flex-direction: row-reverse;
   flex-direction: column;
   flex-direction: column-reverse;
}
```
 <p align="center"><img src="https://user-images.githubusercontent.com/57951744/71493545-5184a980-281e-11ea-9f11-4e8f17efbfba.png"/><img src="https://user-images.githubusercontent.com/57951744/71493689-85140380-281f-11ea-854f-42e4fe9b2474.png"></p>

  ### <a name="flex-order">7. Flex-Order </a>
```
.box {
  display: flex;
  flex-direction: row;
}

.box :nth-child(1) { order: 2; }
.box :nth-child(2) { order: 3; }
.box :nth-child(3) { order: 1; }
.box :nth-child(4) { order: 3; }
.box :nth-child(5) { order: 1; }
```
```
<div class="box">
    <div><a href="#">1</a></div>
    <div><a href="#">2</a></div>
    <div><a href="#">3</a></div>
    <div><a href="#">4</a></div>
    <div><a href="#">5</a></div>
</div>
```

![image](https://user-images.githubusercontent.com/57951744/71493769-1e431a00-2820-11ea-86ef-7b66597ae33d.png)


  ### <a name="justify-content">8. Justify-Content </a>

Alinha os elementos no eixo principal.

```
div {
   justify-content: center;     
   justify-content: start;      
   justify-content: end;        
   justify-content: flex-start; 
   justify-content: flex-end;   
   justify-content: left;       
   justify-content: right;  
}
```
```
div {
   justify-content: space-between;
   justify-content: space-around;
   justify-content: space-evenly;
   justify-content: stretch;
}
```
  ### <a name="align-items">9. Align-Items </a>

Alinha os elementos no eixo secundário.

```
justify-items: auto;
justify-items: normal;
justify-items: stretch;
```
```
justify-items: center;     
justify-items: start;      
justify-items: end;        
justify-items: flex-start; 
justify-items: flex-end;   
justify-items: self-start;
justify-items: self-end;
justify-items: left;       
justify-items: right;      
```
```
justify-items: baseline;
justify-items: first baseline;
justify-items: last baseline;
```
```
justify-items: safe center;
justify-items: unsafe center;
```
```
justify-items: legacy right;
justify-items: legacy left;
justify-items: legacy center;
```
```
justify-items: inherit;
justify-items: initial;
justify-items: unset;
```



  ### <a name="align-self">10. Align-Self </a>

Alinha os elementos de manéira separada 


```
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
text-align: justify-all;
text-align: start;
text-align: end;
text-align: match-parent;
```
```
text-align: -moz-center;
text-align: -webkit-center;
```
```
text-align: inherit;
text-align: initial;
text-align: unset;
```
   
  > Carlos está digitando...
      
   ### Autor

| [<img src="https://avatars2.githubusercontent.com/u/57951744?s=180&v=4"><br><sub>@devcarloshenrique</sub>](https://github.com/devcarloshenrique) |
| :---: |
   
   

     
   
