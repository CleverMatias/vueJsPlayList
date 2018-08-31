# O vue.js 
[voltar](https://github.com/CleverMatias/vueJsPlayList#tutorial-vue-js-por-matias-web-dev) - [próximo tópico](https://github.com/CleverMatias/vueJsPlayList/tree/master/P1_vue_instance#vue-instance)

### O que é o vue js?

O vue.js é um framework front-end javascript para criação de componentes web reativos, podemos de certa maneira compará-lo ao Angular ou React por exemplo, O vue.js destaca-se em sua facilidade de executar as mesmas tarefas dos outros frameworks, e tem uma visão de reaproveitamento de componentes.

Para trabalhar com o vue.js o desenvolvedor tem que ter prévio conhecimento em HTML, CSS, e javascript (não precisa ser avançado, mas pra compreender é bom um conhecimento razoável).
1. Antes de tudo precisamos importar a biblioteca contendo o Vue.js, nesse exemplo utilizaremos um cdn para isso, quando nos aprofundarmos mais utilizaremos formas mais adequadas para trabalhos em larga escala. no header do nosso html encontramos a tag.
```html
<script src="https://unpkg.com/vue"></script>
```
2. Para iniciar utilizaremos o cdn do vue, criaremos um documento padrão html e utilizaremos o script na própria página.
* Abra o index_01.html desta mesma pasta no editor.
* Dentro do body temos a seguinte tag.
```html
<div id="vue-app"></div>
```
* Dentro do script temos o seguinte código que instancia uma classe Vue e passa como propriedade o elemento '#vue-app' que criamos no corpo da página, assim a classe vue js consegue observar o elemento '#vue-app' e realizar operações dentro dele de maneira reativa, ou seja, sem necessidade de uma nova requisição.
```javascript
new Vue({
	el: '#vue-app'
});
```

[voltar](https://github.com/CleverMatias/vueJsPlayList#tutorial-vue-js-por-matias-web-dev) - [próximo tópico](https://github.com/CleverMatias/vueJsPlayList/tree/master/P1_vue_instance#vue-instance)