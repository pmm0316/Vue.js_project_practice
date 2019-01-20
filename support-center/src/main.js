import Vue from 'vue'
import AppLayout from './components/AppLayout'
import router from './router'

new Vue({
  el: '#app',
  render: h => h(AppLayout),
  router
})
