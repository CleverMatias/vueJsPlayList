# Vue Events
### Trabalhando com Eventos no vue.js

[voltar](https://github.com/CleverMatias/vueJsPlayList#tutorial-vue-js-por-matias-web-dev) - [próximo tópico]()

1. Trabalhamos com eventos no vue.js adicionando o atributo do vue "v-on:'nome_do_evento'='função_responsável'", dessa maneira quando ocorrer o evento o vue.js irá delegar a responsabilidade para o método chamado no atributo.
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

[voltar](https://github.com/CleverMatias/vueJsPlayList#tutorial-vue-js-por-matias-web-dev) - [próximo tópico]()



