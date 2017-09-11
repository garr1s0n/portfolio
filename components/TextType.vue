<template>
    <div class="typeHolder">
        <div class="texttype"></div>
    </div>
</template>

<script>
import Typed from 'typed.js'

var options = {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 40
}

export default {
  mounted: function () {
    var typed = new Typed('.texttype', options)
    console.log(typed)
  }
}
</script>

<style lang="less">
    .typeHolder {
        display: block;
        .texttype {
            display: inline;
        }
    }
</style>
