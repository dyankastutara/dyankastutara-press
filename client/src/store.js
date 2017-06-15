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
      Vue.axios.get('http://localhost:3000/api/articles', article, {
        headers: localStorage.getItem('token')
      })
        .then(response => {
          commit('getAllArticles', response.data)
          console.log('Ini Actions Get articles')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  getters: {

  }
})
