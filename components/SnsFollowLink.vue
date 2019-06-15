<template>
  <ul class="footer-share">
    <li class="facebook">
      <img src="~/assets/svg/icons/facebook.svg">
    </li>
    <li class="twitter">
      <img src="~/assets/svg/icons/twitter.svg">
    </li>
    <li class="instagram">
      <img src="~/assets/svg/icons/instagram.svg">
    </li>
    <li class="youtube">
      <img src="~/assets/svg/icons/youtube.svg">
    </li>
    <li class="line">
      <img src="~/assets/svg/icons/line.svg">
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
