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
   
   
   #### Array 
   
   1. [Array literal.](#array-literal)
   2. [Array push](#array-push)
   3. [Array pop](#array-pop)
   4. [Array ForEach](#array-foreach)
   5. [Array com split](#array-split)
   6. [Array com operador destructuring](#utilizando-operador-destructuring-com-array)
   
   #### Funções 
   
   1. [Função dentro de variavel](#funcao-dentro-de-variavel)
   2. [Arrow function](#arrow-function)
   3. [Function Factory](#function-factory)
   
   #### Objeto
   
   1. [Criando objeto de forma literal](#criando-objeto-de-forma-literal)
   2. [Criando função dentro de objeto](#criando-funcao-dentro-de-objeto)
   3. [Criando objeto de função](#criando-objeto-de-funcao)
   4. [Utilizando destructuring com objeto](#utilizando-destructuring-com-objeto)
   
   
   ### Css
   1. [Anatomia Css.](#anatomia-css)
   2. [Estilos Css Interno, Externo e Inline.](#estilos-css)
   3. [Integrando Css em página HTML.](#integracao-css)
   4. [Seletores Css.](#seletores-css)
   5. [Especificidade Css.](#especificidade-css)
   6. [Herança Css.](#heranca-css)
   7. [Box Model.](#box-model)
   8. [Margin Collapsing](#margin-collapsing)
   
   
   ### JavaScript
   
   #### Estrutura de controle

   <a name="for-in">1.</a>
   
   ```
   var person = {fname:"John", lname:"Doe", age:25};

   var text = "";
   
   var x;
   
   for (x in person) {
   
      text += person[x] + " ";
   
   }

   ```
   
   <a name="for-of">2.</a>
      
   ```
   
   var cars = ['BMW', 'Volvo', 'Mini'];
   
   var x;

   for (x of cars) {

      document.write(x + "<br >");

   }
   
   ```
   
   <a name="for">3.</a>
      
   ```
   
   var text = "";
   
   var i;
   
   for (i = 0; i < 5; i++) {
  
      text += "The number is " + i + "<br>";
   
   }
   
   ```
   
   <a name="while">4.</a>
      
   ```
   
   ```
   
   <a name="do-while">5.</a>
      
   ```
   var text = "";

   var i = 0;

   while (i < 5) {
   
      text += "<br>The number is " + i;
      
      i++;
   
   }
   
   ```
   
   <a name="if-else">6.</a>
      
   ```
   
   var time = new Date().getHours();
   
   if (time < 20) {
  
      document.getElementById("demo").innerHTML = "Good day";

   }
   
   ```
   
   <a name="switch-case">7.</a>
      
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

   #### <a name="#criando-objeto-de-funcao">3. Criando objeto de uma função</a>
   
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
   
   <a name="utilizando-destructuring-com-objeto">4. Utilizando operador destructuring com objeto </a>
   
   ```
   const objeto = {
      nome: "Carlos",
      sobrenome: "Henrique"
   }
   
   const {nome: n, sobrenome: s} = objeto
   
   console.log(n + " " + s)
   
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
   
       /* 
       * Todo o conteúdo textual do documento
       * terá 16px de tamanho, pois herdam do
       * `body`.
       */

       body {
         font-size: 16px;
       }
   
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
   
   
   Carlos está digitando...
      
   ### Autor

| [<img src="https://avatars2.githubusercontent.com/u/57951744?s=180&v=4"><br><sub>@devcarloshenrique</sub>](https://github.com/devcarloshenrique) |
| :---: |
   
   

     
   
