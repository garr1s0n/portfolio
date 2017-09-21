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
@playfair: 'Playfair Display', serif;
@raleway: 'Raleway', sans-serif;

.content {
  min-height: 100vh;
  padding: 2em 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
