import Vue from 'vue'
import Vuex from 'Vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export const store = new Vuex.Store({
  state: {
    articles: []
  },
  mutations: {
    getAllArticles(state, article) {
      state.articles = article
    },
    createArticles(state, article) {
      state.articles.push(article)
    },
    deleteArticle(state, article) {
      function checkArticle (art_id) {
        return art_id = article._id
      }
      var index = state.articles.findIndex(chcekArticle)
      state.articles.splice(index, 1, article)
    }
  },
  actions: {
    getArticles({commit}) {
      Vue.axios.get('http://localhost:3000/api/articles')
        .then(response => {
          commit('getAllArticles', response.data)
          console.log('Ini Actions Get articles')
        })
        .catch(err => {
          console.log(err)
        })
    },
    createArticles({commit}, article) {
      Vue.axios.post('http://localhost:3000/api/articles', article, {
        headers: localStorage.getItem('token')
      })
        .then(response => {
          commit('createArticles', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteArticle({commit}, article) {
      Vue.axios.delete('http://localhost:3000/api/articles' + article._id, {
        headers: localStorage.getItem('token')
      })
        .then(response => {
          commit('deleteArticle', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  getters: {

  }
})
