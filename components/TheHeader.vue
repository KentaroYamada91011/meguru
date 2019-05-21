<template>
  <header>
    <div>
      <no-ssr>
        <Slide>
            <span class="bm-menu-link"><nuxt-link to="/" exact>最新の記事</nuxt-link></span>
            <span class="bm-menu-link"><nuxt-link to="/topics">トピックス</nuxt-link></span>
            <span class="bm-menu-link"><nuxt-link to="/authors">ライター一覧</nuxt-link></span>
          </a>
        </Slide>
      </no-ssr>
      <span class="blog-title" to="/" @click.prevent="homeScrollTop">
        <!-- <h1 v-html="meta.name"></h1> -->
        <h1>メグルメ</h1>
      </span>
      <h2>グルメ動画マガジン</h2>
      <nav>
        <nuxt-link to="/" exact>最新の記事</nuxt-link>
        <nuxt-link to="/topics">トピックス</nuxt-link>
        <nuxt-link to="/authors">ライター一覧</nuxt-link>
        <!-- <nuxt-link to="/pages/sample-page">Sample Page</nuxt-link> -->
      </nav>
      <TheHeaderSearch/>
    </div>
  </header>
</template>

<script>
import TheHeaderSearch from '~/components/TheHeaderSearch'

export default {
  components: {
    TheHeaderSearch
  },

  computed: {
    meta () {
      return this.$store.state.meta
    }
  },

  mixins: {
    homeScrollTop: Function
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/vars.scss';
@import '~assets/css/vue-burger-menu.scss';


header {
  font-family: 'Roboto', sans-serif;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  > div {
    align-items: center;
    background-color: #fff;
    display: flex;
    height: 80px;
    margin: 0 auto;
    max-width: $containerWidth;
    padding: 0 32px;
    transition: padding-top 0.5s, padding-bottom 0.5s;
    background-color: rgba(255, 255, 255, 0.9);

    @media (max-width: 700px) {
      height: 60px;
      padding: 16px;
    }
  }

  .blog-title {
    margin-right: 32px;

    @media (max-width: 700px) {
      position: absolute;
      margin-left: calc(50% - 64px);
    }

    h1 {
      color: #666;
      cursor: pointer;
      font-size: 1.5rem;
      font-weight: 400;
    }
  }

  h2 {
    color: #666;
    font-size: 0.8rem;
    font-weight: 400;
    margin-right: 16px;
    @media (max-width: 700px) {
      display: none;
    }
  }

  nav {
    flex-shrink: 0;
    margin-left: auto;

    @media (max-width: 700px) {
      display: none;
      a {
        font-size: 0.5rem;
      }
    }
  }

  a {
    border-color: lighten($primary, 40%);
    color: #999;
    font-size: 0.9rem;
    font-weight: 300;
    text-decoration: none;
    transition: color 0.1s, border-color 0.1s;

    &:hover {
      color: #555;
      border-color: #555;
    }

    &.nuxt-link-active:not(.blog-title) {
      padding-bottom: 4px;
      border-bottom: 2px solid;
    }

    & + a {
      margin-left: 32px;

      @media (max-width: 700px) {
        margin-left: 16px;
      }
    }
  }
}

</style>
