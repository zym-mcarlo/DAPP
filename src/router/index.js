import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '@/pages/home'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      name: 'home',
      path: '/home',
      component: home
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
