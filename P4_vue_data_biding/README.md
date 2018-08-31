# Vue Data Biding
### Trabalhando com v-bind

1. Em um objeto vue, quando precisamos trabalhar com os atributos das tags html utilizmos o v-bind:{atrributo}, isso significa que utilizaremos o vue para gerenciar o conteúdo de um determinado atributo.

```html
<div id="vue-app">
  <h1>Link</h1>
  <p>Visit: <a v-bind:href="url">Google</a></p>
</div>
```

2. A url a ser utilizada pelo v-bind no html está sendo instanciada no atributo data.

```javascript
new Vue({
	el: '#vue-app',
	data: {
		url: 'https://www.google.com.br/'
	}
});
```



