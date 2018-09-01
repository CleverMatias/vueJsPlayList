# Vue Events
### Trabalhando com Eventos no vue.js

[voltar](https://github.com/CleverMatias/vueJsPlayList#tutorial-vue-js-por-matias-web-dev) - [próximo tópico]()

1. Trabalhamos com eventos no vue.js adicionando o atributo do vue "v-on:'nome_do_evento'='função_responsável'", dessa 	     maneira quando ocorrer o evento o vue.js irá delegar a responsabilidade para o método chamado no atributo.
No código abaixo esperamos dois eventos de click para somar ou subtrair o valor da variável 'val'.

```html
<div id="vue-app">
    <button v-on:click="addval()">Adicionar 1</button>
    <button v-on:click="subtractval()">Subtrair 1</button>
    <p>Valor: {{ val }}</p>
</div>
```

2. Quando ocorrer um click em um dos botões disparamas o método reaponsável que irá alterar o valor da variável 'val', e retornará instantaneamente o resultado para o usuário. Temos aqui o exemplo do conceito de reatividade. Observe que quando utilizamos variáveis ou funções dentro do mesmo objeto utilizamos a palavra 'this'.


```javascript
new Vue({
  	el: '#vue-app',
  	data: {
  		val: 1
  	},
        methods: {
          addval () {
            this.val++
          },
         subtractval () {
           this.val--
         }
      }
```

### Modificadores de eventos

  1. Modificadores de eventos

      .stop
      ```html
      <!-- .stop para a propagação do evento para outros elementos -->
      <a v-on:click.stop="doThis"></a>
      ```
      para aprender sobre propagação visite: [o que é progagação de evento?](https://www.w3schools.com/jquery/event_stoppropagation.asp)

      .prevent
      ```html
      <!-- .prevent impede que a página seja carregada novamente -->
      <form v-on:submit.prevent="onSubmit"></form>
      ```
      .capture
      ```html
      <!-- executar ação antes de chegar ao elemento target-->
      <div v-on:click.capture="doThis">...</div>
      ```
      .self
      ```html
      <!-- somente realiza a ação se o elemento clicado for o elemento target da ação-->
      <!-- i.e. not from a child element -->
      <div v-on:click.self="doThat">...</div>
      ```
      .once
      ```html
      <!-- só executa uma vez -->
      <a v-on:click.once="doThis"></a>
      ```

[voltar](https://github.com/CleverMatias/vueJsPlayList#tutorial-vue-js-por-matias-web-dev) - [próximo tópico]()



