import 'babel-polyfill'
import Vue from 'vue'
import router from './router'
import store from './store'
import VueFetch, { $fetch } from './plugins/fetch'
import * as filters from './filters'
import App from './App'

Vue.use(VueFetch, {
  baseUrl: 'https://www.easy-mock.com/mock/5c4807c65b40a073257899d0/blog'
})
for (const key in filters) {
  Vue.filter(key, filters[key])
}
async function main() {
  /**
   * 刷新页面时，调用init
   * 以免出现退出登录状态，影响用户体验
   */
  await store.dispatch('init')
  new Vue({
    el: '#app',
    ...App,
    router,
    store
  })
}
main()

