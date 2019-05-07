import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import article from '@/view/article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/article/:id?',
      name: 'article',
      component: article
    }
  ]
})
