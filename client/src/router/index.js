import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import Signin from '@/components/Signin'
import AddArticle from '@/components/AddArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Content',
      component: Content
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/add-article',
      name: 'AddArticle',
      component: AddArticle
    }
  ]
})
