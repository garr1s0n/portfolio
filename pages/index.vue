<template>
  <section class="content">
    <div class="container">
      <div>
        <h1 class="title">
          gary<br>
          wilpizeski
        </h1>
        <text-type/>
        <p class="subtext">Portfolio &amp; other goodies coming soon.</p>
        <div class="links">
          <a href="mailto:gary.wilpizeski@gmail.com?Subject=Found%20Your%20Website%21%20Let%27s%20Talk%21" class="button--white">Contact</a>
          <a href="https://github.com/garr1s0n/" target="_blank" class="button--white">GitHub</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TextType from '~/components/TextType.vue'

export default {
  components: {
    TextType
  }

}
</script>

<style lang="less">
@playfair: 'Playfair Display', serif;
@raleway: 'Raleway', sans-serif;

.content {
  background: rgb(255,66,207);
  background: -moz-linear-gradient(-45deg, rgba(255,66,207,1) 1%, rgba(125,185,232,1) 100%);
  background: -webkit-linear-gradient(-45deg, rgba(255,66,207,1) 1%,rgba(125,185,232,1) 100%);
  background: linear-gradient(135deg, rgba(255,66,207,1) 1%,rgba(125,185,232,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff42cf', endColorstr='#7db9e8',GradientType=1 );
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-family: @playfair;
  display: block;
  font-weight: 900;
  font-size: 100px;
  font-size: 10vw;
  line-height: 1;
  color: #fff;
}

.links {
  padding-top: 15px;
}
</style>
