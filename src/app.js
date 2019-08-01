import Vue from 'vue'
import router from './router'
import App from './app.vue'

import './element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/assets/style'

import Web3 from 'web3'

window.w = Web3

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
