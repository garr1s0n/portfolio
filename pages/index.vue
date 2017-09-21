<template>
  <section id="header-section" class="content">
    <Header />
  </section>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
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
