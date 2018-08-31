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
      <!-- the click event's propagation will be stopped -->
      <a v-on:click.stop="doThis"></a>
      ```
      .prevent
      ```html
      <!-- the submit event will no longer reload the page -->
      <form v-on:submit.prevent="onSubmit"></form>

      <!-- modifiers can be chained -->
      <a v-on:click.stop.prevent="doThat"></a>

      <!-- just the modifier -->
      <form v-on:submit.prevent></form>

      ```
      .capture
      ```html
      <!-- use capture mode when adding the event listener -->
      <!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
      <div v-on:click.capture="doThis">...</div>
      ```
      .self
      ```html
      <!-- only trigger handler if event.target is the element itself -->
      <!-- i.e. not from a child element -->
      <div v-on:click.self="doThat">...</div>
      ```
      .once
      ```html
      <!-- the click event will be triggered at most once -->
      <a v-on:click.once="doThis"></a>
      ```
      .passive
      ```html
      <!-- the scroll event's default behavior (scrolling) will happen -->
      <!-- immediately, instead of waiting for `onScroll` to complete  -->
      <!-- in case it contains `event.preventDefault()`                -->
      <div v-on:scroll.passive="onScroll">...</div>
      ```

[voltar](https://github.com/CleverMatias/vueJsPlayList#tutorial-vue-js-por-matias-web-dev) - [próximo tópico]()



