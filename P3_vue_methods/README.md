# Vue Methods
### Trabalhando com métodos no vue

1. Em um objeto vue, os métodos ou funcões ficam armazenados dentro da propriedade 'methods', nesse caso estamos criando uma função description que irá retornar uma string e uma função 'funcao_com_parametros("aparelo")' que irá retornar uma string formada utilizando o parâmetro passado. 


```javascript
new Vue({
	el: '#vue-app',
	data: {
		nome: "Pequeno Aprendiz",
  		idade: 34,
  		peso: 78.5 + "Kg."
	},
  methods{
    description () {
      return "Dados da pessoa: "
    },
    funcao_com_parametros (cor) {
      return "A cor preferida é " + cor
    }
  }
});
```

2. Aqui estamos chamando uma função criada em vue com o nome description e também a funcão chamada 'funcao_com_parametros() passando o parâmetro "azul".

```html
<div id="vue-app">
	<h1>Pessoa</h1>
  <p>{{ description() }}</p>
  	<ul>
  		<li>Nome: {{ nome }}</li>
  		<li>Idade: {{ idade }}</li>
  		<li>peso: {{ peso }}</li>
  	</ul>
  <p>{{ funcao_com_parametros("azul") }}</p>
</div>
```
