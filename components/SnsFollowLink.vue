<template>
  <ul class="footer-share">
    <li class="facebook">
      <a href="https://www.facebook.com/letroncjp/" target="_blank" rel="nofollow">
        <img src="~/assets/svg/icons/facebook.svg">
      </a>
    </li>
    <li class="twitter">
      <a href="https://twitter.com/letroncjp" target="_blank" rel="nofollow">
        <img src="~/assets/svg/icons/twitter.svg">
      </a>
    </li>
    <li class="instagram">
      <a href="https://www.instagram.com/letronc.m/" target="_blank" rel="nofollow">
        <img src="~/assets/svg/icons/instagram.svg">
      </a>
    </li>
    <li class="youtube">
      <a href="https://www.youtube.com/channel/UCxI_jUcF-1aTMR71sReJqSA" target="_blank" rel="nofollow">
        <img src="~/assets/svg/icons/youtube.svg">
      </a>
    </li>
    <li class="line">
      <a href="https://line.me/R/ti/p/%40oa-letronc" target="_blank" rel="nofollow">
        <img src="~/assets/svg/icons/line.svg">
      </a>
    </li>
  </ul>
</template>

<script>

export default {
  components: {

  },

  computed: {
    meta () {
      return this.$store.state.meta
    }
  }

}
</script>

<style lang="scss" scoped>

.footer-share {
  text-align: center;
  margin: 0;
  padding: 0;
}
li {
  display: inline-block;
  font-size: 21px;
  margin: 0 6px;
  a {
    float: left;
    width: 48px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    border-radius: 100px;
    letter-spacing: 0;
    background: #fff;
    color: #9b894d;
    margin: 0 2px;
    font-size: 24px;
  }
}

</style>
