<template>
  <div class="home">
    <TheHero
      v-if="heroArticle"
      :hero-article="heroArticle"
      class="heroimg"
    />
    <div class="contentWrapper">
      <div class="articles">
        <div>
          <tabs
            :tabs="tabs"
            :currentTab="currentTab"
            :wrapper-class="'default-tabs'"
            :tab-class="'default-tabs__item'"
            :tab-active-class="'default-tabs__item_active'"
            :line-class="'default-tabs__active-line'"
            @onClick="handleClick"
          />
          <div class="content">
            <div v-if="currentTab === 'tab1'">
              <ArticleList :articles="$store.state.articles"/>
            </div>
            <div v-if="currentTab === 'tab2'">
              <ArticleFeaturedList :articles="$store.state.featuredArticles"/>
            </div>
          </div>
        </div>
        <InfiniteLoading
          v-if="indexInfiniteLoading.enabled"
          ref="infiniteLoading"
          :on-infinite="moreArticles"
        >
          <span slot="spinner">
            <Spinner1/>
          </span>
          <span slot="no-results">
            <Smile/>
            <div>No more articles!</div>
          </span>
          <span slot="no-more">
            <Smile/>
            <div>No more articles!</div>
          </span>
        </InfiniteLoading>
      </div>
      <TheSidebar :featured-articles="$store.state.featuredArticles"/>
    </div>
  </div>
</template>

<script>
import ArticleList from '~/components/ArticleList'
import ArticleFeaturedList from '~/components/ArticleFeaturedList'
import TheHero from '~/components/TheHero'
import TheSidebar from '~/components/TheSidebar'
import InfiniteLoading from 'vue-infinite-loading/src/components/InfiniteLoading.vue'
import Smile from '~/assets/svg/Smile.vue'
import Spinner1 from '~/components/Spinner1.vue'
import Tabs from 'vue-tabs-with-active-line'

export default {
  async asyncData ({ app, store, params }) {
    if (!store.state.articles.length) {
      let articles = await app.$axios.get(`${store.state.wordpressAPI}/wp/v2/posts?orderby=date&per_page=10&categories_exclude=194&_embed`)
      // let articles = await app.$axios.get(`${store.state.wordpressAPI}/wp/v2/posts?orderby=date&per_page=10&categories_exclude=194&_embed`)
      store.commit('setArticles', articles.data)
    }

    if (!store.state.featuredArticles.length) {
      let articles = await app.$axios.get(`${store.state.wordpressAPI}/wp/v2/posts?orderby=date&per_page=10&categories=${store.state.featuredID}&_embed`)
      store.commit('setFeaturedArticles', articles.data)
    }

    if (!store.state.topics) {
      let areatopics = await app.$axios.get(`${store.state.wordpressAPI}/wp/v2/categories?parent=12&per_page=100`)
      store.commit('setAreaTopics', areatopics.data)
    }

    if (!store.state.topics) {
      let scenetopics = await app.$axios.get(`${store.state.wordpressAPI}/wp/v2/scene?per_page=100`)
      store.commit('setSceneTopics', scenetopics.data)
    }

    if (!store.state.topics) {
      let pricetopics = await app.$axios.get(`${store.state.wordpressAPI}/wp/v2/price?per_page=100`)
      store.commit('setPriceTopics', pricetopics.data)
    }
    if (!store.state.topics) {
      let genretopics = await app.$axios.get(`${store.state.wordpressAPI}/wp/v2/genre?per_page=100`)
      store.commit('setGenreTopics', genretopics.data)
    }
  },

  components: {
    ArticleList,
    ArticleFeaturedList,
    TheHero,
    TheSidebar,
    InfiniteLoading,
    Smile,
    Spinner1,
    Tabs
  },

  computed: {
    heroArticle () {
      return this.$store.state.articles[0]
    },
    indexInfiniteLoading () {
      return this.$store.state.indexInfiniteLoading
    }
  },

  head () {
    return {
      title: `${this.$store.state.meta.name}`,
      meta: [
        { description: this.$store.state.meta.description }
      ]
    }
  },
  data () {
    return {
      tabs: [
        { title: '新着記事', value: 'tab1' },
        { title: 'ピックアップ', value: 'tab2' }
      ],
      currentTab: 'tab1'
    }
  },
  methods: {
    moreArticles () {
      this.indexInfiniteLoading.page++

      this.$axios.get(`${this.$store.state.wordpressAPI}/wp/v2/posts?orderby=date&per_page=10&categories_exclude=${this.$store.state.featuredID}&page=${this.indexInfiniteLoading.page}&_embed`)
        .then(response => {
          this.$store.commit('setArticles', response.data)
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
        })
        .catch(() => {
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
        })
    },
    handleClick (newTab) {
      this.currentTab = newTab
    }
  }
}
</script>

<style lang="scss" scoped>
.home {

  .hero {
    margin: 24px 12px;
    @media (min-width: 700px) {
      margin: 30px auto;
    }
  }

  .contentWrapper {
    display: block;
    @media (min-width: 700px) {
      display: flex;
      width: 1000px;
      margin: 30px auto;
    }
  }

  .articles {
    //background-color: #ffffff;
    padding: 0 32px;
    max-width: 900px;
    width: 100%;

    @media (max-width: 1000px) {
      max-width: none;
    }

    @media (max-width: 700px) {
      padding: 0 16px;
    }

    .article-list {
      margin: 32px 0;

      @media (max-width: 700px) {
        margin: 16px 0;
      }
    }
  }
}
</style>

<style lang="scss">
.home {
  .article-list {
    article {
      &:first-child {
        display: none;
      }

      &:nth-child(2) {
        border-top: 0;
        padding-top: 0;
      }
    }
  }
}

.tabs {
  position: relative;
  margin: 0 auto;
  text-align: center;

  &__active-line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: black;
    transition: transform 0.4s ease, width 0.4s ease;
  }

  &__item {
    display: inline-block;
    margin: 0 5px;
    padding: 10px;
    padding-bottom: 8px;
    font-size: 16px;
    letter-spacing: 0.8px;
    color: gray;
    text-decoration: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all 0.25s;

    &_active {
      color: black;
    }

    &:hover {
      border-bottom: 2px solid gray;
      color: black;
    }

    &:focus {
      outline: none;
      border-bottom: 2px solid gray;
      color: black;
    }

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
