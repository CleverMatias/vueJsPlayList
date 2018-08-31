# Vue Instance
### O que é Vue Instace

Vue Instance é um objeto da classe Vue que controla toda ou parte de nossa aplicação. No exemplo anterior nós criamos uma div com o id '#vue-app' e no script criamos um objeto 'new Vue', que é uma instância da classe Vue

1. Esse é a nossa instância do vue js, com ela podemos controlar tudo o que ocorre dentro do elemento '#vue-app', podemos adicionar valores utilizando interpolation '{{}}', podemos alterar valores, enfim controlamos tudo o que ocorre dentro do elemento de forma dinâmica.

```javascript
new Vue({
	el: '#vue-app'
});
```

2. Nesse exemplo iremos adicionar uma variável com uma mensagem que será apresentada no elemento através de interpolation. Variáveis relacionadas a dados da aplicação são inseridas dentro de um objeto 'data' onde cada propriedade é um dado da nossa aplicação.

```javascript
new Vue({
	el: '#vue-app',
	data: {
		msg: 'Minha mensagem'
	}
});
```

3. Aqui utilizamos interpolation para apresentar o conteúdo da variável msg para o usuário. Quando o Vue.js encontra as chaves {{}} ele troca seu valor pelo da variável instanciada em 'data:' no nosso caso o texto " Minha mensagem ".

```html
<div id="vue-app">{{ msg }}</div>
```
