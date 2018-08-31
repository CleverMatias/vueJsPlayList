# Vue Data
### Trabalhando com dados no vue

1. Em um objeto vue, os dados que serão manipulados em nossa aplicação ficarão armazanados em um objeto específico chamado 'data:{}', cada dado será armazenado como um conjunto de chave e valor.


```javascript
new Vue({
	el: '#vue-app',
	data: {
		nome: "Pequeno Aprendiz",
  		idade: 34,
  		peso: 78.5 + "Kg."
	}
});
```

2. Está é uma das formas de apresentar os dados instaciados acima para o usuário da aplicação.

```html
<div id="vue-app">
	<h1>Pessoa</h1>
  	<ul>
  		<li>Nome: {{ nome }}</li>
  		<li>Idade: {{ idade }}</li>
  		<li>peso: {{ peso }}</li>
  	</ul>
</div>
```
