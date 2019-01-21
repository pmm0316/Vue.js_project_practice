import Vue from 'vue'
import AppLayout from './components/AppLayout'
import router from './router'
import './global-components'
import VueFetch from './plugins/fetch'
import state from './state'
import VueState from './plugins/state'

Vue.use(VueFetch, {
  baseUrl: 'https://www.easy-mock.com/mock/5bfb6f42db1e494ccae9b098'
})
Vue.use(VueState, state)

new Vue({
  el: '#app',
  render: h => h(AppLayout),
  router,
  data: state
})
