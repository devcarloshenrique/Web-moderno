# Exercicios do curso [Web Moderno](https://www.udemy.com/course/curso-web/)
   
   - Este repositorio foi criado com o objetivo de enfatizar os **principais conhecimentos** adquiridos no curso [Web Moderno](https://www.udemy.com/course/curso-web/).
   
   ## Índice
   
   ### Css
   1. [Anatomia Css.](#anatomia-css)
   2. [Estilos Css Interno, Externo e Inline.](#estilos-css)
   3. [Integrando Css em página HTML.](#integracao-css)
   4. [Seletores Css.](#seletores-css)
   5. [Especificidade Css.](#especificidade-css)
   6. [Herança Css.](#heranca-css)
   7. [Box Model.](#box-model)
   8. [Margin Collapsing](#margin-collapsing)
   
   ## <a name="anatomia-css">1. Anatomia Css.</a>
   
   ### Conceito
   
   O CSS estipula regras para o arquivo em html. Com cada regra é possível estilizar o conteúdo todo ou somente determinados elementos. Por isso entenda, um comando básico é composto por seletor e declarações, que contém propriedade e valor.
    
         Exemplo: 
            SELETOR {PROPRIEDADE: VALOR}
   
   ## <a name="estilos-css">2. Estilos Css Interno, Externo e Inline.</a>
   
   ### - Css Interno
         
   Estilos CSS feitos desta forma são carregados cada vez que um site é atualizado, o que pode aumentar o tempo de carregamento.
   
   ### - Css Externo
         
   Tudo é feito externamente em um arquivo .css. Isso significa que você pode fazer todo o estilo em um arquivo separado e aplicar o CSS a qualquer página desejada.
   
   ### - Css Inline
         
   Inline trabalha com elementos específicos que possuem a tag <style>. Cada componente deve ser estilizado, por isso talvez não seja o melhor ou o mais rápido para lidar com CSS.
   
      Exemplo:
         <p style="padding: 100px;">Lorem...</p>
   ## <a name="integracao-css">3. Integrando Css em página HTML.</a>
   
   E é com tags de referência que você avisa ao HTML que existe um arquivo de estilo para ele, veja:
      
      Exemplo:
         <link rel=”stylesheet” type=”text/css” href=”estilo.css”>
   Esta tag vai indicar ao HTML que tem um arquivo CSS para ser adicionado à  página. Isto deve ser adicionado dentro da tag <head> </head> do seu HTML.
   
   ## <a name="seletores-css">4. Seletores Css e suas variações.</a>
   
   No CSS, este código inteiro é uma regra. Esta regra inicia com strong, que é um seletor.
   
      Exemplo:
         strong {
            color: red;
         }  
         
   ### - Tipos de Seletores
   
      Exemplo:
         <p class="chave" id="principal">
   
   ### - Seletores com Classe
   
   Em seu CSS, digite um ponto final antes do nome da classe para usar como um seletor.
      
      Exemplo: 
         .chave {
            color: green;
         }
   
   ### - Seletores com ID
   
   Em seu CSS, digite cerquilha (#) antes do ID quanto estiver usando em um seletor ID.
     
      Exemplo: 
         #principal {
            font-weight: bolder;
         }
   
   **Você não está restrito aos dois atributos** especiais, **class e id**. Você pode especificar outros atributos usando colchetes.
   
   Dentro dos colchetes você insere o nome do atributo, opcionalmente seguido por um operador correspondente e um valor. Além disso, a seleção pode ser feita case-insensitive adicionando um "i" depois do valor, mas nem todos os browsers suportam esta funcionalidade ainda.

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
      
   ###  Seletores de pseudo-classes
   
   Uma pseudo-classe em CSS é uma palavra-chave adicionada aos seletores que especifica um estado especial do elemento a ser selecionado. Por exemplo  :hover, aplicará um estilo quando o usuário passar o mouse sobre o elemento especificado pelo seletor.
   
   **Mais Informações**
   
   - [Pseudo-classes](https://www.w3schools.com/css/css_pseudo_classes.asp)

   - [Pseudo-elements](https://www.w3schools.com/css/css_pseudo_elements.asp)

   - [Nth-child](https://www.w3schools.com/cssref/sel_nth-child.asp)
   
   ## <a name="especificidade-css">5. Especificidade Css</a>
   
   ### Conceito
   
   A especificação é a maneira de como os navegadores definem quais valores de propriedades são os mais relevantes para o elemento a ser utilizado. A especificação é baseada apenas nas regras impostas na composição de diferentes tipos de seletores.
   
   A espeficicação é calculada na concatenação da contagem de cada tipo de seletor. Não é um peso aplicado na expressão correspondente.

   No caso de igualdade de especificação, a última declaração encontrada no CSS é aplicada ao elemento.
   
   **Calculando especificidade**
   
   -   **CSS inline:** 1000 pontos;
   -   **ID:** 100 pontos;
   -   **Classes, pseudo-classe e atributos:** 10 pontos;
   -   **Elementos:** 1 ponto.
   
   - [Specificity Calculator](https://specificity.keegan.st/)
   
   ### A exceção **!important**
   
   Quando a regra **!important** é utilizada na declaração do estilo substitui qualquer outra declaração feita no CSS, onde quer que esteja na lista de declaração. Contudo, !important não tem nada haver com especificação.
   
   ## <a name="heranca-css">6. Herança Css</a>
   
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
   
   ## <a name="box-model">7. Seletores Css e suas variações.</a>
   
   Todos os elementos HTML podem ser considerados como caixas. No CSS, o termo "modelo de caixa" é usado quando se fala em design e layout.
   
   <p align="center"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNFOOh_-GfUbHkQKzfelFAD-kMhdsg8b5G04j5jNw1nc41-3LE"></img></p>
   
   -  **Conteúdo** - o conteúdo da caixa, onde o texto e as imagens aparecem
   -  **Preenchimento** - Limpa uma área ao redor do conteúdo. O estofamento é transparente
   -  **Borda** - uma borda que circunda o preenchimento e o conteúdo
   -  **Margem** - Limpa uma área fora da borda. A margem é transparente
   
            div {
              width: 300px;
              border: 15px solid green;
              padding: 50px;
              margin: 20px;
            }
            
            
   ## <a name="margin-collapsing">8. Margin Collapsing.</a>

   ## Conceito
   
   As margens superior e inferior dos blocos às vezes são combinadas(colapsadas/reduzidas) para uma única margem cujo o tamanho é a maior das margens (se os elementos tiverem a mesma margem, uma delas não será somada), combinado a ele, um comportamento conhecido como **margin collapsing**.
   
   ### - Irmãos adjacentes
   
As margens de irmãos adjacentes são colapsadas (execeto quando  o último irmão precisar ser limpado devido ao uso de floats  em elementos anteriores ).
   
   ### - Pai e primeiro/último filho
   
   Se não houver border, padding, parte inline, contexto de formatação de bloco criado ou livre para separar o margin-top de um bloco do margin-top do seu primeiro bloco filho, ou nenhum border, padding, conteúdo inline, height, min-height, ou max-height para separar o  margin-bottom de um bloco do margin-bottom do seu último filho, então essas margens colapsam. A margem colapsada acaba fora do pai.
   
   ### - Blocos vázios
   
   Se não houver border, padding, conteúdo inline, height, ou  min-height para separar um bloco margin-top de sua margin-bottom, então as margens superior e inferior são colapsadas.
   
   [Mais informações](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Box_Model/margin_collapsing)
   
   
   Carlos está digitando...
      
   ## Autor

| [<img src="https://avatars2.githubusercontent.com/u/57951744?s=180&v=4"><br><sub>@devcarloshenrique</sub>](https://github.com/devcarloshenrique) |
| :---: |
   
   

     
   
