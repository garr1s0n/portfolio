<template>
    <div id="typer">
        <vue-typer
            :text='["Front End Development","Usability","User Experience","Random Nonsense","More Strings Here"]'
            :repeat='Infinity'
            :shuffle='false'
            initial-action='typing'
            :pre-type-delay='70'
            :type-delay='70'
            :pre-erase-delay='3500'
            :erase-delay='35'
            erase-style='backspace'
            :erase-on-complete='false'
            caret-animation='blink'
        ></vue-typer>
    </div>
</template>

<script>
var VueTyper = require('vue-typer').VueTyper

module.exports = {
  data: function () {
    return {
      inserttext: 'This Is A'
    }
  },
  components: {
    'vue-typer': VueTyper
  }
}
</script>