<template>
  <section id="header-section" class="content">
    <HeaderSec />
  </section>
</template>

<script>
import HeaderSec from '~/components/Header-Section.vue'

export default {
  components: {
    HeaderSec
  }

}
</script>

<style lang="less">
@import url('../static/styles/base-styles.less');

.content {
  min-height: 100vh;
  padding: 2em 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
