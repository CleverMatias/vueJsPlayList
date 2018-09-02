# Vue Model
### Two way data binding no vue.js

[voltar](https://github.com/CleverMatias/vueJsPlayList#tutorial-vue-js-por-matias-web-dev) - [próximo tópico]()

1. 

Código completo do exemplo utilizado neste capítulo.
```html
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta charset="utf-8">
  <script src="https://unpkg.com/vue"></script>
  <title>teste</title>
  <style type="text/css">
    
  </style>
</head>
<body>
  <div id="vue-app">
    <p>Evento Keyup</p>
    <p>digite um texto:</p>
    <input v-model="name" v-on:keyup="logName" type="text"><br>
    <span>caracteres digitados: {{ count }}</span>
  </div>

  <script>
    new Vue({
      el: '#vue-app',
      data: {
        count: 0,
        name: ""
      },
      methods: {
         logName () {
          this.count = this.name.length
         }
      }
    });
  </script>
</body>
</html>
```

2. O script não tem nada de complexo, temos um contador, a string 'name' que irá armazenar o texto que o usuárido digitar e um método que é chamado cada vez que ocorre o evento.

```javascript
new Vue({
      el: '#vue-app',
      data: {
        count: 0,
        name: ""
      },
      methods: {
         logName () {
          this.count = this.name.length
         }
      }
    });
```

### Modificadores de eventos (keyboard)

  1. Modificadores de eventos no teclado

      Lista completa dos apelidos de modificadores de evento,
      levando em consideração que é auto explicativo não irei detalhar cada item.

      .enter
      .tab
      .delete (captura tanto “Delete” quanto “Backspace”)
      .esc
      .space
      .up
      .down
      .left
      .right
      Se necessário, defina apelidos personalizados através do objeto global config.keyCodes:

      para habilitar a tecla f1 pro exemplo `v-on:keyup.f1`
      Vue.config.keyCodes.f1 = 112


[voltar](https://github.com/CleverMatias/vueJsPlayList#tutorial-vue-js-por-matias-web-dev) - [próximo tópico]()



