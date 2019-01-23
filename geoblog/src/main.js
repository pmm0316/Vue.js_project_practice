import 'babel-polyfill'
import Vue from 'vue'
import router from './router'
import store from './store'
import VueFetch, { $fetch } from './plugins/fetch'
import * as filters from './filters'
import App from './App'

Vue.use(VueFetch, {
  baseUrl: 'https://www.easy-mock.com/mock/5bfb6f42db1e494ccae9b098'
})
for (const key in filters) {
  Vue.filter(key, filters[key])
}
function main() {
  new Vue({
    el: '#app',
    ...App,
    router,
    store
  })
}
main()

