import Vuex from 'vuex'

const store = () => new Vuex.Store({

  actions: {
    async nuxtServerInit ({ commit, state }) {
      let meta = await this.$axios.get(state.wordpressAPI)
      commit('setMeta', meta.data)
    }
  },

  state: {
    article: null,
    articles: [],
    page: null,
    authorArticles: [],
    authors: null,
    indexInfiniteLoading: {
      enabled: true,
      page: 1
    },
    featuredArticles: [],
    featuredColor: {},
    // featuredID: 194,
    featuredID: 4,
    meta: {
      description: '',
      name: ''
    },
    topicArticles: [],
    topics: null,
    areatopics: null,
    scenetopics: null,
    pricetopics: null,
    genretopics: null,
    wordpressAPI: 'https://niko0420.sakura.ne.jp/wp-01/wp-json'
  },

  mutations: {
    setArticle (state, data) {
      state.article = data
    },
    setArticles (state, data) {
      state.articles = state.articles.concat(data)
    },
    setPage (state, data) {
      state.page = data
    },
    setAuthorArticles (state, data) {
      state.authorArticles.push(data)
    },
    setAuthors (state, data) {
      state.authors = data
    },
    setIndexInfiniteLoading (state, data) {
      state.indexInfiniteLoading = data
    },
    setFeaturedColor (state, data) {
      state.featuredColor = data
    },
    setFeaturedArticles (state, data) {
      state.featuredArticles = state.featuredArticles.concat(data)
    },
    setMeta (state, data) {
      state.meta = data
    },
    setTopicArticles (state, data) {
      state.topicArticles.push(data)
    },
    setTopics (state, data) {
      state.topics = data
    },
    setAreaTopics (state, data) {
      state.areatopics = data
    },
    setSceneTopics (state, data) {
      state.scenetopics = data
    },
    setPriceTopics (state, data) {
      state.pricetopics = data
    },
    setGenreTopics (state, data) {
      state.genretopics = data
    }
  }
})

export default store
