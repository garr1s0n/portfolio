<<template>
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
</template>

<script>
import TextType from '~/components/TextType.vue'

export default {
  components: {
    TextType
  }
}
</script>

<<style lang="less">
@import url('../static/styles/base-styles.less');

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

@media screen and (max-width: 40em) {
  .title {
    font-size: 80px;
    font-size: 16vw;
  }
  p.subtext {
    font-size: 7vw;
    line-height: 1.1;
  }
}

</style>
