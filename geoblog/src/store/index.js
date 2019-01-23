/**
 * CREATED DATE: 2019/1/22 17:27:33
 * author: mingmingbuzai
 * email: 847679250@qq.com
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  user: null
}
const store = new Vuex.Store({
  state
})

export default store
